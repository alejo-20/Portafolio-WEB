import { Project, Skill, Experience, Certification, SocialLink } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Porpeto Web',
    description: 'A modern web application built with React and Node.js, featuring real-time data synchronization and responsive design.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SaaS/Driver'
  },
  {
    id: '2',
    title: 'App Maul',
    description: 'E-commerce mobile application with advanced search capabilities and seamless checkout experience.',
    techStack: ['React Native', 'Firebase', 'Stripe'],
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SaaS/Driver'
  },
  {
    id: '3',
    title: 'Tienda E-commerce',
    description: 'Full-stack e-commerce platform with inventory management, payment processing, and admin dashboard.',
    techStack: ['Next.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SaaS/Driver'
  },
  {
    id: '4',
    title: 'Dashboard',
    description: 'Analytics dashboard with real-time data visualization, custom charts, and export functionality.',
    techStack: ['React', 'D3.js', 'AWS'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SaaS/Driver'
  },
  {
    id: '5',
    title: 'Tyul Pases',
    description: 'Travel booking platform with integrated payment system and booking management.',
    techStack: ['Vue.js', 'Express', 'MySQL'],
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SaaS/Driver'
  },
  {
    id: '6',
    title: 'Bogo Packagi',
    description: 'Package tracking and logistics management system with real-time updates.',
    techStack: ['Angular', 'Spring Boot', 'Docker'],
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SaaS/Driver'
  }
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
