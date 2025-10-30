import React from 'react';
import type { Service, Project, Testimonial, WhyChooseUsItem } from './types';
import { AiIcon, AutomationIcon, WebDevIcon, DataScienceIcon } from './components/icons/ServiceIcons';
import { TargetIcon, LightbulbIcon, UsersIcon } from './components/icons/WhyChooseUsIcons';
import { LinkedInIcon, InstagramIcon } from './components/icons/ContactIcons';


export const SERVICES: Service[] = [
  {
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    icon: React.createElement(AiIcon),
    title: 'AI & Machine Learning',
    description: 'Unlock predictive insights and intelligent automation with custom AI/ML models tailored to your business needs.',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    icon: React.createElement(AutomationIcon),
    title: 'Process Automation',
    description: 'Streamline your operations, reduce manual effort, and increase efficiency with our bespoke automation solutions.',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    icon: React.createElement(WebDevIcon),
    title: 'Web & Backend',
    description: 'From stunning websites to robust backend systems, we build scalable, secure, and high-performance digital experiences.',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    icon: React.createElement(DataScienceIcon),
    title: 'Data Science',
    description: 'Transform your raw data into actionable intelligence, driving smarter decisions and strategic growth.',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
    {
        icon: React.createElement(TargetIcon),
        title: 'Proven Results',
        description: 'We focus on delivering measurable business outcomes, not just lines of code.',
        value: 98,
        suffix: '%',
    },
    {
        icon: React.createElement(LightbulbIcon),
        title: 'Innovative Solutions',
        description: 'Leveraging the latest technologies to build future-proof systems that give you a competitive edge.',
        value: 50,
        suffix: '+',
    },
    {
        icon: React.createElement(UsersIcon),
        title: 'Client-Centric Approach',
        description: 'Your success is our priority. We work as a true partner to understand and achieve your goals.',
        value: 100,
        suffix: '%',
    }
];

export const PROJECTS: Project[] = [
  {
    image: 'https://picsum.photos/seed/project1/600/400',
    category: 'AI / Automation',
    title: 'Predictive Analytics Engine',
    description: 'A machine learning model that forecasts sales trends with over 95% accuracy.',
    longDescription: 'This project involved developing a sophisticated machine learning pipeline to analyze historical sales data and predict future market trends. The engine integrates with existing ERP systems to provide real-time insights, helping the client optimize inventory and marketing spend.',
    techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'Docker'],
  },
  {
    image: 'https://picsum.photos/seed/project2/600/400',
    category: 'Web Development',
    title: 'E-Commerce Platform',
    description: 'A high-traffic online marketplace built with a resilient microservices architecture.',
    longDescription: 'We engineered a fully-featured e-commerce platform designed for high scalability and performance. The microservices architecture ensures resilience and allows for independent scaling of services like product catalog, user authentication, and order processing.',
    techStack: ['React', 'Node.js', 'Express', 'Kubernetes', 'PostgreSQL'],
  },
  {
    image: 'https://picsum.photos/seed/project3/600/400',
    category: 'Data Science',
    title: 'Customer Segmentation',
    description: 'Data analysis project to identify key customer profiles and personalize marketing efforts.',
    longDescription: 'Using unsupervised learning algorithms, we analyzed customer behavior data to identify distinct segments. These insights enabled our client to launch highly targeted and effective marketing campaigns, increasing conversion rates by 30%.',
    techStack: ['Python', 'Pandas', 'Jupyter', 'Matplotlib', 'Tableau'],
  },
   {
    image: 'https://picsum.photos/seed/project4/600/400',
    category: 'Backend Systems',
    title: 'Real-Time API',
    description: 'Developed a low-latency API for a mobile application serving thousands of requests per second.',
    longDescription: 'The project focused on building a high-throughput, low-latency API to power a real-time mobile application. We utilized caching strategies, optimized database queries, and implemented a WebSocket layer for instant data updates.',
    techStack: ['Go', 'gRPC', 'Redis', 'Prometheus', 'Grafana'],
  },
  {
    image: 'https://picsum.photos/seed/project5/600/400',
    category: 'Web Development',
    title: 'Corporate Landing Page',
    description: 'A visually stunning and interactive website to elevate a brand\'s online presence.',
    longDescription: 'We designed and developed a modern, animated, and fully responsive corporate website. The site features smooth scroll animations, a content management system for easy updates, and is optimized for search engines.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Sanity.io'],
  },
  {
    image: 'https://picsum.photos/seed/project6/600/400',
    category: 'AI / Automation',
    title: 'Automated Reporting',
    description: 'A system that automatically generates and distributes daily business intelligence reports.',
    longDescription: 'This solution automates the entire reporting process, from data extraction and processing to the generation and email distribution of pixel-perfect PDF reports. It has saved the client hundreds of hours of manual work.',
    techStack: ['Python', 'SQLAlchemy', 'Celery', 'AWS Lambda'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Starbridge Technologies transformed our data into our most valuable asset. Their expertise in AI is unmatched.",
    name: 'Jane Doe',
    role: 'CEO, Innovate Inc.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    rating: 5,
  },
  {
    quote: "The automation solution they built for us saved over 20 hours of manual work per week. A total game-changer.",
    name: 'John Smith',
    role: 'COO, Future Forward',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
    rating: 5,
  },
  {
    quote: "Our new website is not only beautiful but also incredibly fast and reliable. The team was a pleasure to work with.",
    name: 'Emily White',
    role: 'Marketing Director, TechStyle',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
    rating: 5,
  },
  {
    quote: "The backend system is robust and scalable, handling our peak traffic without a hiccup. Highly recommended.",
    name: 'Michael Chen',
    role: 'CTO, AppSphere',
    avatar: 'https://picsum.photos/seed/avatar4/100/100',
    rating: 4,
  },
];

export const SOCIAL_LINKS = [
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/starbridge-technologies-aa9a59388/', icon: React.createElement(LinkedInIcon) },
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    { name: 'Instagram', url: 'https://www.instagram.com/starbridgetechnologies/?hl=en', icon: React.createElement(InstagramIcon) },
]
