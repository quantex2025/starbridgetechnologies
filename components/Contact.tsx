import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { SOCIAL_LINKS } from '../constants';
import { MailIcon } from './icons/ContactIcons';

// Calendly Modal Component
const CalendlyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'is-visible' : ''}`} onClick={onClose}>
      <div className="modal-content !p-0 w-full max-w-4xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors z-10 bg-dark-bg rounded-full p-1" aria-label="Close modal">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe
          src="https://calendly.com/your-username" // Replace with your Calendly link
          width="100%"
          height="100%"
          frameBorder="0"
          title="Schedule a Meeting"
        ></iframe>
      </div>
    </div>
  );
};


const Contact: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-32 bg-dark-bg dark:bg-dark-bg">
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your Message" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow">
              Send Message
            </button>
          </form>
          <div className="space-y-6 text-center md:text-left">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-orbitron text-white mb-4">Contact Information</h3>
                <a href="mailto:starbridgetechnologies@gmail.com" className="flex items-center justify-center md:justify-start text-gray-300 hover:text-primary transition-colors">
                    <MailIcon />
                    <span className="ml-3">starbridgetechnologies@gmail.com</span>
                </a>
            </div>
             <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-orbitron text-white mb-4">Follow Us</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      {link.icon}
                    </a>
                  ))}
                </div>
            </div>
             <div className="text-center">
                 <button onClick={() => setIsCalendlyOpen(true)} className="inline-block w-full border-2 border-primary text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-primary hover:text-dark-bg hover:scale-105">
                     Schedule a Meeting
                 </button>
             </div>
          </div>
        </div>
      </div>
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </section>
  );
};

export default Contact;
