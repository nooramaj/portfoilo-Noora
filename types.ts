export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  longDescription?: string;
  keyFeatures?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  description: string;
  details: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
