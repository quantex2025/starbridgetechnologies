import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { SERVICES } from '../constants';

const About: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section id="about" className="py-20 lg:py-32 bg-dark-bg dark:bg-dark-bg">
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-4">
            Our <span className="text-primary">Mission</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
            At Starbridge Technologies, we turn technology into your competitive edge. From modern backend systems to intelligent AI tools, we design solutions that work — fast, scalable, and future-ready.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {SERVICES.map((service, index) => (
                <div key={service.title} className="flex flex-col items-center" style={{ animation: `slideInUp 1s ease-out ${index * 150}ms forwards`, opacity: 0 }}>
                    <div className="text-primary w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full border-2 border-primary/20 mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                        {/* FIX: Cast the icon to a ReactElement with a specific prop type to resolve the cloneElement error. */}
                        {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "h-8 w-8" })}
                    </div>
                    <h3 className="font-orbitron text-white">{service.title}</h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;