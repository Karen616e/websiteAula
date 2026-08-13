import qrcode

# --- CONFIGURACIÓN DE LA URL ---
# Para probar HOY con tu celular:
url_destino = "http://10.20.144.31:5000/qr-scan"

# Cuando el sysadmin de 'odin' configure el dominio final, cambiarás esta variable a:
# url_destino = "http://aulacisco.ingenieria.unam.mx/asistencia/qr-scan"

print(f"Generando QR para la URL: {url_destino}")

# Configuración de alta calidad (soporta manchas o dobleces al imprimir)
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H, 
    box_size=15,
    border=4,
)
qr.add_data(url_destino)
qr.make(fit=True)

# Generar imagen con el azul característico (Azul Pumas/Ingeniería)
imagen = qr.make_image(fill_color="#002b5c", back_color="white")
imagen.save("qr_aula_cisco.png")

print("¡Listo! El archivo 'qr_aula_cisco.png' se ha guardado en tu carpeta.")