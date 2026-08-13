from app import app, db
from sqlalchemy import text

with app.app_context():
    try:
        db.session.execute(text("ALTER TABLE usuarios ADD COLUMN fecha_inicio DATE;"))
        db.session.execute(text("UPDATE usuarios SET fecha_inicio = CURRENT_DATE WHERE fecha_inicio IS NULL;"))
        db.session.commit()
        print("¡Columna 'fecha_inicio' agregada a tu base de datos!")
    except Exception as e:
        print(f"Detalle: {e}")