import React from 'react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <ParticleBackground />
      <div className="z-10 animate-fade-in p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-extrabold text-white tracking-tighter mb-4">
          Transforming Businesses with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Smart Technology</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          We build powerful software, AI, and automation systems that help businesses grow smarter.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-block w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow"
              style={{ animationDelay: '1s' }}
            >
              Get a Quote
            </a>
            <a
              href="#portfolio"
              className="inline-block w-full sm:w-auto border-2 border-primary text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-primary hover:text-dark-bg hover:scale-105"
              style={{ animationDelay: '1.2s' }}
            >
              View Our Work
            </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a href="#about" aria-label="Scroll down">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
                  <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
          </a>
      </div>
    </section>
  );
};

export default Hero;
