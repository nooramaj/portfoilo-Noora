import { Project, Skill, Experience } from './types';

export const COLORS = {
  pearl: '#FBFCF8',
  main: '#000000',
  accent: '#740A03',
  border: '#e1e1e1',
};

export const PROJECTS: Project[] = [
  {
    title: 'Phoenix-Pub',
    description: 'Dar Al-Feneq Library - A full-stack publishing and e-commerce platform managing inventory, categories, and customer orders.',
    link: 'https://alfeneq.com',
    tags: ['E-commerce · Full-stack · Management'],
    longDescription: 'A comprehensive digital marketplace for Dar Al-Feneq Library. This system handles complex inventory management for diverse book categories and integrates a secure checkout flow for readers.',
    keyFeatures: [
      'Robust administrative dashboard for inventory tracking',
      'Dynamic category filtering and search optimization',
      'Secure customer order lifecycle management',
      'Responsive architectural layout for mobile and desktop'
    ]
  },

  
  {
    title: 'ORNÉ — Fine Jewelry Landing Page',
    description: 'A luxury jewelry landing page, a concept e-commerce site for a small-batch jewelry atelier',
    link: 'https://nooramaj.github.io/luxuryJwells/',
    tags: ['HTML5 · CSS3 · JavaScript · E-commerce · Front-end · Vanilla JS'],
    longDescription: 'A front-end concept for a small-batch fine jewelry brand, focused on tactile, editorial-feeling interaction.',
    keyFeatures: [
     'Light/dark theme toggle with a gradual, whole-site color crossfade',
      'Custom jeweler\'s-loupe photo magnifier built with vanilla JS',
      'Ambient canvas sparkle background tuned per theme for visibility',
      'Scroll-triggered reveal animations and a scroll-aware transparent nav',
      'Fully responsive, accessible layout with reduced-motion support'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Programming',
    items: ['Flutter', 'Dart', 'JavaFX', 'JavaScript (ES6+)', 'SQL', 'C++', 'Java']
  },
  {
    category: 'Engineering Tools',
    items: ['Android Studio', 'VS Code', 'GitHub', 'UML Design', 'MS Project', 'Draw.io']
  },
  {
    category: 'Architecture & Logic',
    items: ['REST API Integration', 'State Management', 'UML Class Diagrams', 'System Logic Design']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Junior Front-End Developer',
    description: 'Engineering cross-platform mobile experiences.',
    details: 'Leveraged Flutter and Dart to integrate REST APIs for dynamic data synchronization and responsive UI implementation.'
  },
  {
    role: 'System Architect',
    description: 'Structuring complex software systems.',
    details: 'Architected UML Class Diagrams for University and Cinema management systems, defining core business logic and database relations.'
  }
];
