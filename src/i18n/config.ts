// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'nav.Home | translate',
        projects: 'nav.Projects',
        skills: 'nav.Skills',
        experience: 'nav.Experience',
        contact: 'nav.Contact',
        downloadCV: 'nav.DownloadCV',
        language: 'Language'
      },
      hero: {
        title: 'Welcome to My Portfolio',
        subtitle: 'Full Stack Developer',
        description: 'I create amazing digital experiences'
      },
      // ... más traducciones
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        projects: 'Proyectos',
        skills: 'Habilidades',
        experience: 'Experiencia',
        contact: 'Contacto',
        downloadCV: 'Descargar CV',
        language: 'Idioma'
      },
      hero: {
        title: 'Bienvenido a Mi Portafolio',
        subtitle: 'Desarrollador Full Stack',
        description: 'Creo experiencias digitales increíbles'
      },
      // ... más traducciones
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;