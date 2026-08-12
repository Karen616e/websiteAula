# crear_admin.py
from app import app, db, Usuario
from werkzeug.security import generate_password_hash

with app.app_context():
    admin = Usuario(
        numero_cuenta='',
        nombre='admin',
        password_hash=generate_password_hash('holahola'),
        rol='admin'
    )
    db.session.add(admin)
    db.session.commit()
    print("Administrador creado con éxito.")