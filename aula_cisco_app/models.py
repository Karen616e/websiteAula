# models.py
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    numero_cuenta = db.Column(db.String(50), unique=True, nullable=False)
    nombre = db.Column(db.String(100), nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    rol = db.Column(db.String(20), default='usuario')
    horas_acumuladas = db.Column(db.Float, default=0.0)
    fecha_inicio = db.Column(db.Date, nullable=True)
    modalidad = db.Column(db.String(20), default='6_meses')

class RegistroAsistencia(db.Model):
    __tablename__ = 'registros_asistencia'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    hora_entrada = db.Column(db.DateTime, default=datetime.utcnow)
    hora_salida = db.Column(db.DateTime, nullable=True)
    estado = db.Column(db.String(20), default='activo')
    
    # IMPORTANTE: cascade="all, delete-orphan" borra el historial si das de baja al usuario
    usuario = db.relationship('Usuario', backref=db.backref('registros', lazy=True, cascade='all, delete-orphan'))