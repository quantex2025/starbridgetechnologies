import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface WhyChooseUsItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    value: number;
    suffix: string;
}