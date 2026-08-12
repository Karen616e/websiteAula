# app.py
from flask import Flask, request, session, redirect, url_for, render_template, abort, flash
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, Usuario, RegistroAsistencia
from datetime import datetime
import os

app = Flask(__name__)
app.secret_key = 'holahola' # Clave para las sesiones

# Configuración de MariaDB
# Si existe la variable de entorno DB_HOST (que usaremos en Docker), la usa. Si no, usa localhost.
db_host = os.getenv('DB_HOST', 'localhost')

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://cisco_admin:holahola@{db_host}/aula_cisco'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

IP_PUBLICA_AULA = "132.248.59.66"

# ==========================================
# RUTAS DE AUTENTICACIÓN Y REGISTRO
# ==========================================

@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'usuario_id' in session:
        return redirect(url_for('dashboard'))

    if request.method == 'POST':
        numero_cuenta = request.form.get('numero_cuenta')
        password = request.form.get('password')

        usuario = Usuario.query.filter_by(numero_cuenta=numero_cuenta).first()

        if usuario and check_password_hash(usuario.password_hash, password):
            session['usuario_id'] = usuario.id
            session['rol'] = usuario.rol
            return redirect(url_for('dashboard'))
        else:
            flash("Número de cuenta o contraseña incorrectos.", "error")

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/registrar-alumno', methods=['GET', 'POST'])
def registrar_alumno():
    # Solo los administradores pueden registrar nuevos alumnos
    if 'usuario_id' not in session or session.get('rol') != 'admin':
        abort(403, description="No tienes permiso para ver esta página.")

    if request.method == 'POST':
        numero_cuenta = request.form.get('numero_cuenta')
        nombre = request.form.get('nombre')
        password = request.form.get('password')

        # Verificar si ya existe
        if Usuario.query.filter_by(numero_cuenta=numero_cuenta).first():
            flash("Ese número de cuenta ya está registrado.", "error")
        else:
            nuevo_alumno = Usuario(
                numero_cuenta=numero_cuenta,
                nombre=nombre,
                password_hash=generate_password_hash(password),
                rol='usuario'
            )
            db.session.add(nuevo_alumno)
            db.session.commit()
            flash(f"Alumno {nombre} registrado con éxito.", "success")
            return redirect(url_for('dashboard'))

    return render_template('registro_alumno.html')

# ==========================================
# RUTAS DE NAVEGACIÓN Y LÓGICA CORE
# ==========================================

@app.route('/')
def dashboard():
    if 'usuario_id' not in session:
        return redirect(url_for('login'))
    
    usuario = Usuario.query.get(session['usuario_id'])
    
    if session.get('rol') == 'admin':
        alumnos = Usuario.query.filter_by(rol='usuario').all()
        registros_activos = RegistroAsistencia.query.filter_by(estado='activo').all()
        activos_ids = [registro.usuario_id for registro in registros_activos]
        return render_template('dashboard_admin.html', usuario=usuario, alumnos=alumnos, activos_ids=activos_ids)
    
    registro_activo = RegistroAsistencia.query.filter_by(usuario_id=usuario.id, estado='activo').first()
    return render_template('dashboard_user.html', usuario=usuario, turno_activo=(registro_activo is not None))

@app.route('/qr-scan')
def qr_scan():
    # 1. Validar IP
    ip_cliente = request.headers.get('X-Forwarded-For', request.remote_addr)
        
        # Lista de IPs permitidas (La del aula y el localhost para pruebas)
    ips_permitidas = [IP_PUBLICA_AULA, "127.0.0.1"]

    if ip_cliente not in ips_permitidas:
        abort(403, description=f"Acceso denegado. Tu sistema se reporta con la IP: {ip_cliente}")

    # 2. Validar sesión
    if 'usuario_id' not in session:
        return redirect(url_for('login'))
    
    usuario_id = session['usuario_id']
    usuario = Usuario.query.get(usuario_id)

    # Si un admin escanea el QR por error, lo mandamos a su panel
    if usuario.rol == 'admin':
        return redirect(url_for('dashboard'))

    # 3. Lógica Toggle
    registro_activo = RegistroAsistencia.query.filter_by(usuario_id=usuario_id, estado='activo').first()

    if registro_activo:
        # CHECK-OUT
        registro_activo.hora_salida = datetime.utcnow()
        registro_activo.estado = 'completado'
        diferencia = registro_activo.hora_salida - registro_activo.hora_entrada
        horas_turno = diferencia.total_seconds() / 3600.0
        usuario.horas_acumuladas += horas_turno
        db.session.commit()
        mensaje = f"Check-out exitoso. Sumaste {round(horas_turno, 2)} horas hoy."
    else:
        # CHECK-IN
        nuevo_registro = RegistroAsistencia(usuario_id=usuario_id, estado='activo')
        db.session.add(nuevo_registro)
        db.session.commit()
        mensaje = "Check-in exitoso. Tu turno ha comenzado."

    return render_template('dashboard_user.html', mensaje=mensaje, usuario=usuario, turno_activo=(registro_activo is None))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000)