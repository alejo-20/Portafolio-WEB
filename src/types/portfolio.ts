import { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  category: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon?: IconType;
  color?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
