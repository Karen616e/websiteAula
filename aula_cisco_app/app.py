# app.py
import os
import csv
import io
import json
from flask import Flask, request, session, redirect, url_for, render_template, abort, flash, make_response
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import SQLAlchemyError
from models import db, Usuario, RegistroAsistencia
from datetime import datetime, timedelta
from collections import defaultdict

app = Flask(__name__)
app.secret_key = 'holahola'

db_host = os.getenv('DB_HOST', 'localhost')
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://cisco_admin:holahola@{db_host}/aula_cisco'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
IP_PUBLICA_AULA = "132.248.59.66"

# --- FUNCIONES DE AYUDA ---
def formatear_segundos(total_segundos):
    total_segundos = int(total_segundos)
    horas = total_segundos // 3600
    minutos = (total_segundos % 3600) // 60
    segundos = total_segundos % 60
    return f"{horas:02d}:{minutos:02d}:{segundos:02d}"

app.jinja_env.filters['formato_tiempo'] = formatear_segundos

def procesar_turnos_olvidados():
    limite_olvido = timedelta(hours=14)
    turnos_abiertos = RegistroAsistencia.query.filter_by(estado='activo').all()
    for turno in turnos_abiertos:
        if datetime.utcnow() - turno.hora_entrada > limite_olvido:
            turno.hora_salida = turno.hora_entrada
            turno.estado = 'penalizado'
    db.session.commit()

def obtener_datos_perfil(usuario):
    historial = RegistroAsistencia.query.filter_by(usuario_id=usuario.id).filter(RegistroAsistencia.estado.in_(['completado', 'penalizado'])).order_by(RegistroAsistencia.hora_entrada.desc()).all()
    
    progreso_total_pct = min(round((usuario.horas_acumuladas / 480.0) * 100, 1), 100.0)
    meta_semanal = 20.0 if usuario.modalidad == '6_meses' else 10.0
    
    hoy = datetime.utcnow()
    inicio_semana = hoy - timedelta(days=hoy.weekday())
    inicio_semana = inicio_semana.replace(hour=0, minute=0, second=0, microsecond=0)
    horas_semana_actual = sum((r.hora_salida - r.hora_entrada).total_seconds() / 3600.0 for r in historial if r.hora_entrada >= inicio_semana and r.hora_salida)
    
    if usuario.fecha_inicio:
        dias_activos = (hoy.date() - usuario.fecha_inicio).days
        semanas_activas = max(1.0, dias_activos / 7.0)
        horas_ideales = semanas_activas * meta_semanal
        balance_horas = usuario.horas_acumuladas - horas_ideales
    else:
        balance_horas = 0.0

    fecha_fin = hoy.date()
    fecha_inicio_graf = min(usuario.fecha_inicio, fecha_fin - timedelta(days=60)) if usuario.fecha_inicio else (fecha_fin - timedelta(days=60))
    dias_totales = (fecha_fin - fecha_inicio_graf).days + 1
    
    datos_dias = {}
    for i in range(dias_totales):
        dia_actual = (fecha_inicio_graf + timedelta(days=i)).strftime('%Y-%m-%d')
        datos_dias[dia_actual] = 0.0
        
    for reg in historial:
        if reg.hora_salida:
            fecha_str = reg.hora_entrada.strftime('%Y-%m-%d')
            if fecha_str in datos_dias:
                datos_dias[fecha_str] += (reg.hora_salida - reg.hora_entrada).total_seconds() / 3600.0
                
    fechas_graf = list(datos_dias.keys())
    horas_graf = [round(h, 6) for h in datos_dias.values()]
    datos_grafica = json.dumps({'fechas': fechas_graf, 'horas': horas_graf})

    return historial, progreso_total_pct, meta_semanal, horas_semana_actual, balance_horas, datos_grafica

# ==========================================
# RUTAS DE AUTENTICACIÓN Y REGISTRO
# ==========================================

@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'usuario_id' in session: return redirect(url_for('dashboard'))
    if request.method == 'POST':
        usuario = Usuario.query.filter_by(numero_cuenta=request.form.get('numero_cuenta')).first()
        if usuario and check_password_hash(usuario.password_hash, request.form.get('password')):
            session['usuario_id'] = usuario.id
            session['rol'] = usuario.rol
            return redirect(url_for('dashboard'))
        flash("Número de cuenta o contraseña incorrectos.", "error")
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/registrar-prestador', methods=['GET', 'POST'])
def registrar_prestador():
    if 'usuario_id' not in session or session.get('rol') != 'admin': abort(403)
    if request.method == 'POST':
        numero_cuenta = request.form.get('numero_cuenta')
        if Usuario.query.filter_by(numero_cuenta=numero_cuenta).first():
            flash("Ese número de cuenta ya está registrado.", "error")
        else:
            try:
                fecha_str = request.form.get('fecha_inicio')
                if fecha_str:
                    try:
                        # Ahora lee estrictamente DD/MM/AAAA
                        fecha_inicio = datetime.strptime(fecha_str, '%d/%m/%Y').date()
                    except ValueError:
                        flash("El formato de fecha debe ser DD/MM/AAAA.", "error")
                        return redirect(url_for('registrar_prestador'))
                else:
                    fecha_inicio = datetime.utcnow().date()

                nuevo_prestador = Usuario(
                    numero_cuenta=numero_cuenta,
                    nombre=request.form.get('nombre'),
                    password_hash=generate_password_hash(request.form.get('password')),
                    rol='usuario',
                    modalidad=request.form.get('modalidad'),
                    fecha_inicio=fecha_inicio
                )
                db.session.add(nuevo_prestador)
                db.session.commit()
                flash(f"Prestador registrado con éxito.", "success")
                return redirect(url_for('dashboard'))
            except SQLAlchemyError as e:
                db.session.rollback()
                flash("Error de BD. Revisa la consola.", "error")
                print(f"Error: {e}")
                
    return render_template('registro_prestador.html')

@app.route('/agregar-horas/<int:id>', methods=['POST'])
def agregar_horas(id):
    if 'usuario_id' not in session or session.get('rol') != 'admin': abort(403)
    usuario = Usuario.query.get_or_404(id)
    try:
        # Recibimos las 3 variables del modal
        h = int(request.form.get('horas', 0) or 0)
        m = int(request.form.get('minutos', 0) or 0)
        s = int(request.form.get('segundos', 0) or 0)
        
        total_segundos = (h * 3600) + (m * 60) + s
        horas_extra = total_segundos / 3600.0
        
        if horas_extra > 0:
            usuario.horas_acumuladas += horas_extra
            db.session.commit()
            tiempo_str = formatear_segundos(total_segundos)
            flash(f"Se sumaron {tiempo_str} al perfil de {usuario.nombre}.", "success")
        else:
            flash("No se agregó ningún tiempo.", "info")
    except ValueError:
        flash("Valores inválidos ingresados en el formulario.", "error")
    return redirect(url_for('dashboard'))

@app.route('/eliminar-prestador/<int:id>', methods=['POST'])
def eliminar_prestador(id):
    if 'usuario_id' not in session or session.get('rol') != 'admin': abort(403)
    usuario = Usuario.query.get_or_404(id)
    db.session.delete(usuario)
    db.session.commit()
    flash(f"Prestador {usuario.nombre} dado de baja.", "success")
    return redirect(url_for('dashboard'))

@app.route('/exportar-csv')
def exportar_csv():
    if 'usuario_id' not in session or session.get('rol') != 'admin': abort(403)
    alumnos = Usuario.query.filter_by(rol='usuario').all()
    output = io.StringIO()
    writer = csv.writer(output, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    writer.writerow(['Matricula', 'Nombre', 'Modalidad', 'Fecha de Inicio', 'Horas Acumuladas', 'Porcentaje 480h'])
    for a in alumnos:
        pct = min(round((a.horas_acumuladas / 480.0) * 100, 2), 100.0)
        mod = '6 Meses' if a.modalidad == '6_meses' else '1 Año'
        f_inicio = a.fecha_inicio.strftime('%d/%m/%Y') if a.fecha_inicio else 'N/D'
        writer.writerow([a.numero_cuenta, a.nombre, mod, f_inicio, round(a.horas_acumuladas, 2), f"{pct}%"])
    response = make_response(output.getvalue())
    response.headers["Content-Disposition"] = "attachment; filename=reporte_servicio_social.csv"
    response.headers["Content-type"] = "text/csv"
    return response

# ==========================================
# RUTAS DE NAVEGACIÓN Y LÓGICA CORE
# ==========================================

@app.route('/')
def dashboard():
    if 'usuario_id' not in session: return redirect(url_for('login'))
    procesar_turnos_olvidados()
    usuario = Usuario.query.get(session['usuario_id'])
    
    if session.get('rol') == 'admin':
        alumnos = Usuario.query.filter_by(rol='usuario').all()
        activos_ids = [r.usuario_id for r in RegistroAsistencia.query.filter_by(estado='activo').all()]
        mod_6 = sum(1 for a in alumnos if a.modalidad == '6_meses')
        mod_12 = sum(1 for a in alumnos if a.modalidad == '12_meses')
        datos_grafica_admin = json.dumps({'labels': ['6 Meses', '1 Año'], 'datos': [mod_6, mod_12]})
        return render_template('dashboard_admin.html', usuario=usuario, alumnos=alumnos, activos_ids=activos_ids, grafica_data=datos_grafica_admin)
    
    registro_activo = RegistroAsistencia.query.filter_by(usuario_id=usuario.id, estado='activo').first()
    historial, progreso_total_pct, meta_semanal, horas_semana_actual, balance_horas, datos_grafica = obtener_datos_perfil(usuario)

    return render_template('dashboard_user.html', usuario=usuario, turno_activo=(registro_activo is not None), historial=historial, progreso_total_pct=progreso_total_pct, meta_semanal=meta_semanal, horas_semana_actual=horas_semana_actual, balance_horas=balance_horas, grafica_data=datos_grafica)

@app.route('/prestador/<int:id>')
def detalle_prestador(id):
    if 'usuario_id' not in session or session.get('rol') != 'admin': abort(403)
    procesar_turnos_olvidados()
    prestador = Usuario.query.get_or_404(id)
    registro_activo = RegistroAsistencia.query.filter_by(usuario_id=prestador.id, estado='activo').first()
    historial, progreso_total_pct, meta_semanal, horas_semana_actual, balance_horas, datos_grafica = obtener_datos_perfil(prestador)
    
    return render_template('detalle_prestador.html', prestador=prestador, turno_activo=(registro_activo is not None), historial=historial, progreso_total_pct=progreso_total_pct, meta_semanal=meta_semanal, horas_semana_actual=horas_semana_actual, balance_horas=balance_horas, grafica_data=datos_grafica)

@app.route('/qr-scan')
def qr_scan():
    ip_cliente = request.headers.get('X-Forwarded-For', request.remote_addr)
    if ip_cliente not in [IP_PUBLICA_AULA, "127.0.0.1"]: abort(403, description=f"Acceso denegado. IP detectada: {ip_cliente}")
    if 'usuario_id' not in session: return redirect(url_for('login'))
    if session['rol'] == 'admin': return redirect(url_for('dashboard'))

    procesar_turnos_olvidados()
    usuario = Usuario.query.get(session['usuario_id'])
    registro_activo = RegistroAsistencia.query.filter_by(usuario_id=usuario.id, estado='activo').first()

    if registro_activo:
        registro_activo.hora_salida = datetime.utcnow()
        registro_activo.estado = 'completado'
        diferencia = registro_activo.hora_salida - registro_activo.hora_entrada
        usuario.horas_acumuladas += diferencia.total_seconds() / 3600.0
        db.session.commit()
        flash(f"Check-out exitoso. Sumaste {formatear_segundos(diferencia.total_seconds())} hoy.", "success")
    else:
        db.session.add(RegistroAsistencia(usuario_id=usuario.id, estado='activo'))
        db.session.commit()
        flash("Check-in exitoso. Tu turno ha comenzado.", "info")
    return redirect(url_for('dashboard'))

if __name__ == '__main__':
    with app.app_context(): db.create_all()
    app.run(host='0.0.0.0', port=5000)