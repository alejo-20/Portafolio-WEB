import { SiTypescript, SiJavascript, SiPython, SiPostgresql, SiMongodb, SiTailwindcss, SiHtml5, SiCss3, SiPostman, SiMysql, SiOracle } from "react-icons/si";
import { Project, Skill, Experience, Certification, SocialLink } from '../types/portfolio';
import { FaReact, FaGit, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { GrGrow } from "react-icons/gr";
import { MdAssignmentTurnedIn, MdChecklist, MdBugReport } from "react-icons/md";



export const projects: Project[] = [
  {
    id: '1',
    title: 'RefriAlaska',
    description: 'A modern web application built with Html, Css and JavaScript, featuring real-time data synchronization and responsive design.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: 'src/Sources/RefriAlaska Projecto.png',
    category: 'Website Corporativo',
    liveUrl: 'https://refrialaskavillavo.com',
    githubUrl: 'https://github.com/alejo-20/refri-alaska'
  },
  {
    id: '2',
    title: 'BogoSpots ',
    description: 'A digital museum-type web platform where photographic spots of Bogotá D.C are discovered, documented and shared through user-generated content and curatorial validation.',
    techStack: ['React', 'PostgreSQL', 'Tailwind','Vue.JS'],
    image: 'src/Sources/Landing BogoSpots.png',
    category: 'Full-stack web application - In progress',
    liveUrl: '',
    githubUrl:''
  },
  {
    id: '3',
    title: 'In development',
    description: 'web project in progress',
    techStack: ['...', '...', '...'],
    image: 'src/Sources/AppenProgreso.avif',
    category: 'SaaS/Driver',
    liveUrl: '',
    githubUrl:''
  },
  {
    id: '4',
    title: 'In development',
    description: 'project in progress',
    techStack: ['...', '...', '...'],
    image: 'src/Sources/AppEnProceso2.avif',
    category: 'Web Project',
    liveUrl: '',
    githubUrl:''
  },
  
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', level: 92, icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', level: 92, icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 90, icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', category: 'Frontend', level: 88, icon: FaReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 85, icon: SiTailwindcss, color: '#38BDF8' },

  // Backend & APIs
  { name: 'REST APIs', category: 'Backend', level: 80, icon: SiPostman, color: '#FF6C37' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 82, icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', category: 'Databases', level: 80, icon: SiMysql, color: '#4479A1' },
  { name: 'Oracle SQL', category: 'Databases', level: 78, icon: SiOracle, color: '#F80000' },

  // QA & Testing
  { name: 'Manual Testing', category: 'QA & Testing', level: 85, icon: MdBugReport, color: '#E11D48' },
  { name: 'Test Case Design', category: 'QA & Testing', level: 82, icon: MdChecklist, color: '#8B5CF6' },
  { name: 'Bug Reporting', category: 'QA & Testing', level: 82, icon: MdAssignmentTurnedIn, color: '#10B981' },

  // Tools
  { name: 'Git', category: 'Tools', level: 90, icon: FaGit, color: '#F05032' },
  { name: 'GitHub', category: 'Tools', level: 90, icon: FaGithub, color: '#181717' },
  { name: 'VS Code', category: 'Tools', level: 88, icon: VscVscode, color: '#007ACC' },
  { name: 'Postman', category: 'Tools', level: 85, icon: SiPostman, color: '#FF6C37' },

  // Methodologies
  { name: 'Agile / Scrum', category: 'Methodologies', level: 85, icon: GrGrow, color: '#22C55E' },
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
  },
 
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
