import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Starbridge Technologies. All Rights Reserved.</p>
        <p className="text-sm">Crafted with Code & Intelligence.</p>
      </div>
    </footer>
  );
};

export default Footer;
