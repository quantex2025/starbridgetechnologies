import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Modal Component defined within Portfolio.tsx
const PortfolioModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={`modal-overlay ${project ? 'is-visible' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10" aria-label="Close modal">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-3xl font-orbitron font-bold text-white mb-2">{project.title}</h2>
        <p className="text-primary font-semibold mb-4">{project.category}</p>
        <p className="text-gray-300 mb-6">{project.longDescription}</p>
        <h3 className="text-xl font-orbitron text-white mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount(PROJECTS.length);
  };
  
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-dark-bg dark:bg-dark-bg">
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into the solutions we've engineered and the success stories we've helped write.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, visibleCount).map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-primary font-bold uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-2xl font-orbitron font-bold text-white mt-1 mb-2">{project.title}</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < PROJECTS.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMore}
              className="bg-gradient-to-r from-primary/20 to-secondary/20 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow border border-primary/50"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
      <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Portfolio;
