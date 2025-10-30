
import React from 'react';

export const SunIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

export const MoonIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

export const AnimatedThemeIcon: React.FC<{ theme: string }> = ({ theme }) => {
    return (
        <div className="relative w-6 h-6">
            <div className={`sun-icon absolute inset-0 transition-all duration-500 ease-in-out ${theme === 'dark' ? 'transform rotate-90 opacity-0' : 'transform rotate-0 opacity-100'}`}>
                <SunIcon />
            </div>
            <div className={`moon-icon absolute inset-0 transition-all duration-500 ease-in-out ${theme === 'dark' ? 'transform rotate-0 opacity-100' : 'transform -rotate-90 opacity-0'}`}>
                <MoonIcon />
            </div>
        </div>
    );
};
