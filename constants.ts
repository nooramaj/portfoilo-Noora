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
    link: 'alfeneq.com',
    tags: ['E-commerce', 'Full-stack', 'Management'],
    longDescription: 'A comprehensive digital marketplace for Dar Al-Feneq Library. This system handles complex inventory management for diverse book categories and integrates a secure checkout flow for readers.',
    keyFeatures: [
      'Robust administrative dashboard for inventory tracking',
      'Dynamic category filtering and search optimization',
      'Secure customer order lifecycle management',
      'Responsive architectural layout for mobile and desktop'
    ]
  },
  {
    title: 'Job Recruitment App',
    description: 'A cross-platform Flutter recruitment application featuring real-time job listings and advanced filtering.',
    link: 'https://github.com/nooramaj/recruiting',
    tags: ['Flutter', 'Dart', 'Mobile'],
    longDescription: 'Architected as a college project to solve recruitment friction. The application focuses on a seamless mobile experience for both recruiters and job seekers using cross-platform capabilities.',
    keyFeatures: [
      'Real-time job listing synchronization',
      'Advanced multi-criteria search filtering',
      'Interactive application status tracking',
      'Custom UI components designed for high-performance mobile interactions'
    ]
  },
  {
    title: 'JavaFX Car Rental',
    description: 'Desktop architecture for managing a fleet of 50+ vehicles, focused on user-centric interface design.',
    link: 'https://github.com/nooramaj/cars-shop',
    tags: ['JavaFX', 'Desktop', 'SQL'],
    longDescription: 'A high-integrity desktop solution for automotive businesses. Built using JavaFX, it manages the full lifecycle of vehicle rentals from availability checks to final invoicing.',
    keyFeatures: [
      'Relational database integration (SQL) for persistent data storage',
      'Automated rental agreement generation',
      'Fleet status dashboard with real-time visual alerts',
      'Multi-user role-based access control architecture'
    ]
  },
  {
    title: 'Michelin-Star Web',
    description: 'Modern restaurant front-end architecture using advanced CSS3 and JavaScript to deliver a high-end dining experience.',
    link: 'https://github.com/nooramaj/Michelin-star',
    tags: ['Frontend', 'CSS3', 'JS'],
    longDescription: 'A sensory-focused frontend project that replicates the high-end atmosphere of a Michelin-star restaurant. Focused on micro-interactions and visual storytelling.',
    keyFeatures: [
      'Advanced parallax and scroll-triggered animations',
      'Semantic HTML5 structure for accessibility and SEO',
      'Responsive design architecture using modern CSS Grid and Flexbox',
      'Custom JavaScript interactions for menu exploration'
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
