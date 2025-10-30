
import React from 'react';
import { SERVICES } from '../constants';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-900/20 dark:bg-gray-900/20">
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-4">
            What We <span className="text-primary">Do</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="group bg-dark-bg p-8 rounded-lg border border-gray-700/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-glow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-orbitron text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
   