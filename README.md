# 🚀 Portafolio Web - Full Stack Developer

Un portafolio web moderno y responsivo construido con React, TypeScript y Tailwind CSS. Incluye internacionalización (i18n) para español e inglés, y un formulario de contacto funcional con Netlify Forms.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y responsiva con Tailwind CSS
- 🌍 **Multidioma**: Soporte completo para español e inglés con react-i18next
- 📱 **Responsive**: Optimizado para dispositivos móviles y desktop
- 📧 **Formulario de Contacto**: Integración con Netlify Forms (sin backend)
- 🎯 **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- 🔧 **TypeScript**: Tipado fuerte para mejor desarrollo
- ⚡ **Vite**: Build tool rápido para desarrollo y producción

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool y dev server
- **Lucide React** - Iconos modernos
- **React Icons** - Colección adicional de iconos

### Internacionalización
- **i18next** - Framework de internacionalización
- **react-i18next** - Integración con React

### Formularios
- **Netlify Forms** - Manejo de formularios sin backend

### Desarrollo
- **ESLint** - Linting y formateo de código
- **PostCSS** - Procesamiento CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── About.tsx       # Sección "Sobre mí"
│   ├── Certifications.tsx
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Experience.tsx  # Experiencia laboral
│   ├── Footer.tsx      # Pie de página
│   ├── Hero.tsx        # Sección principal
│   ├── LanguageSelector.tsx
│   ├── Navigation.tsx  # Barra de navegación
│   ├── ProjectModal.tsx
│   ├── Projects.tsx    # Galería de proyectos
│   └── Skills.tsx      # Habilidades técnicas
├── data/
│   └── portfolio.ts    # Datos del portafolio
├── i18n/               # Configuración de idiomas
│   ├── config.ts       # Configuración i18next
│   ├── en.json         # Traducciones inglés
│   └── es.json         # Traducciones español
├── types/              # Definiciones TypeScript
│   └── portfolio.ts    # Tipos del portafolio
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd portafolio-web
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en** `http://localhost:5173`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Vista previa de la build
npm run lint         # Ejecuta ESLint
npm run typecheck    # Verifica tipos TypeScript
```

## 🌍 Configuración de Idiomas

El proyecto incluye soporte completo para español e inglés:

- **Archivos de traducción**: `src/i18n/en.json` y `src/i18n/es.json`
- **Selector de idioma**: Componente `LanguageSelector.tsx`
- **Configuración**: `src/i18n/config.ts`

Para agregar un nuevo idioma:
1. Crea un nuevo archivo JSON en `src/i18n/`
2. Actualiza la configuración en `config.ts`
3. Agrega el idioma al selector

## 📧 Configuración de Netlify Forms

### Para Despliegue en Netlify

1. **Sube tu código a GitHub**
2. **Conecta tu repositorio a Netlify**
3. **Netlify detectará automáticamente la configuración** del `netlify.toml`

### Configurar Notificaciones de Email

1. Ve al dashboard de tu sitio en Netlify
2. Ve a **Site settings** → **Forms**
3. En **Form notifications**, agrega tu email: `alejocasquete619@gmail.com`
4. Selecciona "Email notifications" y configura el formato

### Verificar Funcionamiento

1. El formulario aparecerá en **Active forms** en Netlify
2. Prueba enviando un mensaje desde tu sitio desplegado
3. Revisa tu email para confirmar recepción

## 🔧 Configuración de Build

### Netlify
El proyecto incluye configuración automática para Netlify:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[netlify_forms]]
  name = "contact"
  fields = ["user_name", "user_email", "subject", "message"]
  email = "alejocasquete619@gmail.com"
```

### Variables de Entorno
No se requieren variables de entorno para funcionamiento básico.

## 📱 Características del Formulario

- ✅ **Validación de campos** requeridos
- ✅ **Protección anti-spam** (honeypot)
- ✅ **Mensajes de éxito/error** en español
- ✅ **Envío directo a email** sin backend
- ✅ **Compatible con React** y TypeScript

## 🎨 Personalización

### Colores y Tema
Los colores están definidos en Tailwind CSS. Para cambiar el tema:

1. Modifica las clases CSS en los componentes
2. Actualiza `tailwind.config.js` si es necesario

### Contenido
- **Proyectos**: Edita `src/data/portfolio.ts`
- **Traducciones**: Modifica `src/i18n/*.json`
- **Información personal**: Actualiza componentes individuales

## 🚀 Despliegue

### Netlify (Recomendado)
1. Conecta tu repositorio GitHub a Netlify
2. Configura el build command: `npm run build`
3. Publica desde la carpeta `dist`
4. Configura las notificaciones de email

### Otros Servicios
El proyecto puede desplegarse en cualquier servicio que soporte SPA:
- Vercel
- GitHub Pages
- Firebase Hosting

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Alejandro Casquete**
- Email: alejocasquete619@gmail.com
- LinkedIn: [Tu LinkedIn]
- GitHub: [Tu GitHub]

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!