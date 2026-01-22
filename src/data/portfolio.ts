import { SiJavascript, SiPostgresql, SiTailwindcss, SiHtml5, SiCss3, SiPostman, SiMysql, SiOracle } from "react-icons/si";
import { Project, Skill, Experience, Certification, SocialLink } from '../types/portfolio';
import { FaReact, FaGit, FaGithub, FaJava, FaPython} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { GrGrow } from "react-icons/gr";
import { MdAssignmentTurnedIn, MdChecklist, MdBugReport } from "react-icons/md";



export const projects: Project[] = [
  {
    id: '1',
    title: 'projectsData.1.title',
    description: 'projectsData.1.description',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: 'public/images/RefriAlaska Projecto.png',
    category: 'projectsData.1.category',
    liveUrl: 'https://refrialaskavillavo.com',
    githubUrl: 'https://github.com/alejo-20/refri-alaska'
  },
  {
    id: '2',
    title: 'projectsData.2.title',
    description: 'projectsData.2.description',
    techStack: ['React', 'PostgreSQL', 'Tailwind','Vue.JS'],
    image: 'public/images/Landing BogoSpots.png',
    category: 'projectsData.2.category',
    liveUrl: '',
    githubUrl:''
  },
  {
    id: '3',
    title: 'projectsData.3.title',
    description: 'projectsData.3.description',
    techStack: ['...', '...', '...'],
    image: 'public/images/AppenProgreso.avif',
    category: 'projectsData.3.category',
    liveUrl: '',
    githubUrl:''
  },
  {
    id: '4',
    title: 'projectsData.4.title',
    description: 'projectsData.4.description',
    techStack: ['...', '...', '...'],
    image: 'public/images/AppEnProceso2.avif',
    category: 'projectsData.4.category',
    liveUrl: '',
    githubUrl:''
  },
  
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', level: 75, icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', level: 70, icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 35, icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', category: 'Frontend', level: 25, icon: FaReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 40, icon: SiTailwindcss, color: '#38BDF8' },

  // Backend & APIs
  { name: 'Java (Spring Boot)', category: 'Backend', level: 20, icon: FaJava, color: '#d80909' },
  { name: 'Python', category: 'Backend', level: 20, icon: FaPython, color: '#3776AB' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 35, icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', category: 'Databases', level: 50, icon: SiMysql, color: '#4479A1' },
  { name: 'Oracle SQL', category: 'Databases', level: 55, icon: SiOracle, color: '#F80000' },

  // QA & Testing
  { name: 'Manual Testing', category: 'QA & Testing', level: 85, icon: MdBugReport, color: '#E11D48' },
  { name: 'Test Case Design', category: 'QA & Testing', level: 80, icon: MdChecklist, color: '#8B5CF6' },
  { name: 'Bug Reporting', category: 'QA & Testing', level: 85, icon: MdAssignmentTurnedIn, color: '#10B981' },

  // Tools
  { name: 'Git', category: 'Tools', level: 55, icon: FaGit, color: '#F05032' },
  { name: 'GitHub', category: 'Tools', level: 70, icon: FaGithub, color: '#181717' },
  { name: 'VS Code', category: 'Tools', level: 85, icon: VscVscode, color: '#007ACC' },
  { name: 'Postman', category: 'Tools', level: 25, icon: SiPostman, color: '#FF6C37' },

  // Methodologies
  { name: 'Agile / Scrum', category: 'Methodologies', level: 80, icon: GrGrow, color: '#22C55E' },
];



//Experiencia laboral
export const experiences: Experience[] = [
 {
    company: 'TeChrea',
    role: 'experiences.1.role',
    period: 'April - October 2025',
    description: [
      'experiences.1.description.0',
      'experiences.1.description.1',
      'experiences.1.description.2',
      'experiences.1.description.3',
      'experiences.1.description.4',
      'experiences.1.description.5'
    ],
    technologies: ['experiences.1.technologies.0', 'experiences.1.technologies.1','experiences.1.technologies.2', 'experiences.1.technologies.3', 'experiences.1.technologies.4']
  },
 
];

export const certifications: Certification[] = [
  {
  name: 'certifications.1.name',
  issuer: 'certifications.1.issuer',
  date: '2023 - 2025',
  credentialId: '—',
  url: ''
},
  {
    name: 'certifications.2.name',
    issuer: 'certifications.2.issuer',
    date: 'November 2025',
    credentialId: 'Certiport ',
    url: 'public/pdfs/IT-SPECIALIST-CYBERSECURITY.pdf',
  },
  {
    name: 'certifications.3.name',
    issuer: 'certifications.3.issuer',
    date: 'July 2025',
    credentialId: 'META-Coursera',
    url: 'https://coursera.org/verify/HHGUCCSUTVM9'
  },
   {
    name: 'certifications.4.name',
    issuer: 'certifications.4.issuer',
    date: 'August 2025',
    credentialId: 'Oracle Next Education',
    url: 'https://app.aluracursos.com/user/alejocasquete991/course/logica-programacion-sumergete-programacion-javascript/certificate'
  },
  {
  name: 'certifications.5.name',
  issuer: 'certifications.5.issuer',
  date: 'August 2025',
  credentialId: 'Oracle Next Education',
  url: 'https://app.aluracursos.com/user/alejocasquete991/course/logica-programacion-explorar-funciones-listas/certificate'
},
{
  name: 'certifications.6.name',
  issuer: 'certifications.6.issuer',
  date: 'August 2025',
  credentialId: 'Oracle Next Education',
  url: 'https://app.aluracursos.com/certificate/alejocasquete991/ia-explorando-potencial-inteligencia-artificial-generativa'
},
{
  name: 'certifications.7.name',
  issuer: 'certifications.7.issuer',
  date: 'May 2025',
  credentialId: 'A2F23889-EE9B-42CC-9F58-8088730C0D4F',
  url: 'public/pdfs/Certificado-TecnicoRedes_De_Datos_DACO.pdf'
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
    url: 'https://www.linkedin.com/in/alejandro-casquete-024092263/',
    icon: 'Linkedin'
  },
  
  {
    platform: 'Email',
    url: 'alejocasquete619@gmail.com',
    icon: 'Mail'
  }
];''
