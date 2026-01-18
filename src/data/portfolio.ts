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
    description: 'E-commerce mobile application with advanced search capabilities and seamless checkout experience.',
    techStack: ['React', 'PostgreSQL', 'Tailwind','Vue.JS'],
    image: 'src/Sources/Landing BogoSpots.png',
    category: 'Full-stack web application'
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
  { name: 'JavaScript', category: 'Languages', level: 95, icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Languages', level: 90, icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', category: 'Languages', level: 85, icon: SiPython, color: '#3776AB'  },
  { name: 'React', category: 'Frontend', level: 95, icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', level: 88, icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Vue.js', category: 'Frontend', level: 80, icon: SiVuedotjs, color: '#42B883' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 92, icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Node.js', category: 'Backend', level: 90, icon: FaNodeJs, color: '#339933' },
  { name: 'Express', category: 'Backend', level: 88, icon: SiExpress, color: '#FFFFFF' },
  { name: 'PostgreSQL', category: 'Database', level: 85, icon: SiPostgresql, color: '#336791' },
  { name: 'MongoDB', category: 'Database', level: 82, icon: SiMongodb, color: '#47A248' },
  { name: 'GitHub', category: 'Tools', level: 93, icon: FaGithub, color: '#000000' }
];




export const experiences: Experience[] = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
  },
  {
    company: 'Digital Solutions Co.',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple client-facing web applications',
      'Optimized database queries improving performance by 40%',
      'Collaborated with designers to implement responsive UI/UX'
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis']
  },
  {
    company: 'StartUp Labs',
    role: 'Frontend Developer',
    period: '2018 - 2020',
    description: [
      'Built responsive web applications from design mockups',
      'Implemented real-time features using WebSocket',
      'Participated in agile development process'
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'Firebase']
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CSA-2023'
  },
  {
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-2022'
  },
  {
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2021',
    credentialId: 'MDB-DEV-2021'
  },
  {
    name: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    date: '2023'
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
