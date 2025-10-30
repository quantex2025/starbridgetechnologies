
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './icons/ThemeIcons';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-dark-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-lg shadow-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0">
            <h1 className="text-2xl font-orbitron font-bold text-white tracking-wider">
              Star<span className="text-primary">bridge</span>
            </h1>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-300 hover:text-primary hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-primary transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <div className="md:hidden ml-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-300 hover:text-primary focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
   