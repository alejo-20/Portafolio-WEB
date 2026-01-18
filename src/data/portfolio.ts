import { Project, Skill, Experience, Certification, SocialLink } from '../types/portfolio';

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
  { name: 'JavaScript', category: 'Languages', level: 95 },
  { name: 'TypeScript', category: 'Languages', level: 90 },
  { name: 'Python', category: 'Languages', level: 85 },
  { name: 'C++', category: 'Languages', level: 75 },
  { name: 'React', category: 'Frontend', level: 95 },
  { name: 'Next.js', category: 'Frontend', level: 88 },
  { name: 'Vue.js', category: 'Frontend', level: 80 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 92 },
  { name: 'Node.js', category: 'Backend', level: 90 },
  { name: 'Express', category: 'Backend', level: 88 },
  { name: 'PostgreSQL', category: 'Database', level: 85 },
  { name: 'MongoDB', category: 'Database', level: 82 },
  { name: 'AWS', category: 'DevOps', level: 78 },
  { name: 'Docker', category: 'DevOps', level: 80 },
  { name: 'Git', category: 'Tools', level: 93 }
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
