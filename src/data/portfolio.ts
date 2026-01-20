import { SiTypescript, SiJavascript, SiPython, SiPostgresql, SiMongodb, SiTailwindcss, SiVuedotjs, SiNextdotjs, SiExpress, SiHtml5, SiCss3 } from "react-icons/si";
import { Project, Skill, Experience, Certification, SocialLink } from '../types/portfolio';
import { FaReact, FaNodeJs, FaGit, FaDocker, FaAws, FaGithub } from "react-icons/fa";


export const projects: Project[] = [
  {
    id: '1',
    title: 'RefriAlaska',
    description: 'A modern web application built with Html, Css and JavaScript, featuring real-time data synchronization and responsive design.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: 'src/Sources/RefriAlaska Projecto.png',
    category: 'Website Corporativo'
     
  },
  {
    id: '2',
    title: 'BogoSpots ',
    description: 'A digital museum-type web platform where photographic spots of Bogotá D.C are discovered, documented and shared through user-generated content and curatorial validation.',
    techStack: ['React', 'PostgreSQL', 'Tailwind','Vue.JS'],
    image: 'src/Sources/Landing BogoSpots.png',
    category: 'Full-stack web application - In progress'
  },
  {
    id: '3',
    title: 'In development',
    description: 'web project in progress',
    techStack: ['...', '...', '...'],
    image: 'src/Sources/AppenProgreso.avif',
    category: 'SaaS/Driver'
  },
  {
    id: '4',
    title: 'In development',
    description: 'web project in progress',
    techStack: ['React', 'D3.js', 'AWS'],
    image: 'src/Sources/AppEnProceso2.avif',
    category: 'Web Project'
  },
  
];

export const skills: Skill[] = [
  { name: 'HTML5', category: 'Frontend', level: 95, icon: SiHtml5, color: '#f76e1e' },
  { name: 'CSS3', category: 'Frontend', level: 95, icon: SiCss3, color: '#2648df' },
  { name: 'JavaScript', category: 'Frontend', level: 95, icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', category: 'Frontend', level: 95, icon: FaReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 92, icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'PostgreSQL', category: 'Database', level: 85, icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', category: 'Database', level: 85, icon: SiPostgresql, color: '#336791' },
  { name: 'ORACLE SQL', category: 'Database', level: 85, icon: SiPostgresql, color: '#336791' },
  { name: 'Rest APIs', category: 'Backend', level: 82, icon: SiMongodb, color: '#47A248' },
  { name: 'Git', category: 'Tools', level: 93, icon: FaGit, color: '#f17725' },
  { name: 'GitHub', category: 'Tools', level: 93, icon: FaGithub, color: '#000000' },
  { name: 'VS CODE', category: 'Tools', level: 93, icon: FaGithub, color: '#00ff4c' },
  { name: 'POSTMAN', category: 'Tools', level: 93, icon: FaGithub, color: '#00ff62' },
  { name: 'Agile / Scrum', category: 'Methodologies', level: 93, icon: FaGithub, color: '#00ff0d' },
];


//Experiencia laboral
export const experiences: Experience[] = [
 {
    company: 'TeChrea',
    role: 'Aprendiz IT / Tecnología',
    period: 'April - October 2025',
    description: [
      'Support in the operation and maintenance of internal systems and enterprise applications.',
      'Execution of basic SQL queries in Oracle databases for data validation and information verification.',
      'First-level technical support and resolution of software and system-related incidents.',
      'Execution of basic functional manual testing on an internal company application.',
      'Documentation of test cases, test results, and creation of technical system documentation.',
      'Collaboration with the technical team under agile methodologies.'
    ],
    technologies: ['Oracle SQL', 'Manual Testing','Internal Systems', 'IT Support', 'Agile Methodologies']
  }
  
];

export const certifications: Certification[] = [
  {
  name: 'Software Development Technologist',
  issuer: 'UNINPAHU',
  date: '2023 - 2025',
  credentialId: '—',
  url: ''
},
  {
    name: 'Information Technology Specialist – Cybersecurity',
    issuer: 'Certiport (Pearson VUE)',
    date: 'November 2025',
    credentialId: 'Certiport ',
    url: 'src/Sources/IT-SPECIALIST-CYBERSECURITY.pdf',
  },
  {
    name: 'Introduction to Front-End Development',
    issuer: 'Meta (via Coursera)',
    date: 'July 2025',
    credentialId: 'META-Coursera',
    url: 'https://coursera.org/verify/HHGUCCSUTVM9'
  },
   {
    name: 'Programming Logic: Getting Started with JavaScript',
    issuer: 'Alura LATAM (Oracle Next Education)',
    date: 'August 2025',
    credentialId: 'Oracle Next Education',
    url: 'https://app.aluracursos.com/user/alejocasquete991/course/logica-programacion-sumergete-programacion-javascript/certificate'
  },
  {
  name: 'Programming Logic: Exploring Functions and Lists',
  issuer: 'Alura LATAM (Oracle Next Education)',
  date: 'August 2025',
  credentialId: 'Oracle Next Education',
  url: 'https://app.aluracursos.com/user/alejocasquete991/course/logica-programacion-explorar-funciones-listas/certificate'
},
{
  name: 'AI: Exploring the Potential of Generative Artificial Intelligence',
  issuer: 'Alura LATAM (Oracle Next Education)',
  date: 'August 2025',
  credentialId: 'Oracle Next Education',
  url: 'https://app.aluracursos.com/certificate/alejocasquete991/ia-explorando-potencial-inteligencia-artificial-generativa'
},
{
  name: 'Técnico en Redes de Datos',
  issuer: 'Fundación Carlos Slim - Capacítate para el Empleo',
  date: 'May 2025',
  credentialId: 'A2F23889-EE9B-42CC-9F58-8088730C0D4F',
  url: 'src/Sources/Certificado-TecnicoRedes_De_Datos_DACO.pdf'
}


];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter'
  },
  {
    platform: 'Email',
    url: 'mailto:contact@example.com',
    icon: 'Mail'
  }
];
