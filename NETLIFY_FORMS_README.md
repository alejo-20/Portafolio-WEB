# Configuración de Netlify Forms

## Pasos para configurar el formulario de contacto:

### 1. Desplegar en Netlify
1. Sube tu proyecto a GitHub
2. Ve a [netlify.com](https://netlify.com) y conecta tu repositorio
3. Netlify detectará automáticamente la configuración del `netlify.toml`

### 2. Configurar notificaciones de email
1. Ve al dashboard de tu sitio en Netlify
2. Ve a **Site settings** → **Forms**
3. En la sección **Form notifications**, agrega tu email: `alejocasquete619@gmail.com`
4. Selecciona "Email notifications" y configura el formato del email

### 3. Verificar que funciona
1. El formulario debería aparecer en **Active forms** en Netlify
2. Prueba enviando un mensaje desde tu sitio desplegado
3. Revisa tu email para confirmar que llegan los mensajes

## Características del formulario:
- ✅ Validación de campos requeridos
- ✅ Protección contra spam (honeypot)
- ✅ Mensajes de éxito/error
- ✅ Envío directo a tu email sin backend
- ✅ Compatible con React y TypeScript