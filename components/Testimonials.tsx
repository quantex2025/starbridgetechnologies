import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import useScrollAnimation from '../hooks/useScrollAnimation';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-600'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            ))}
        </div>
    );
};

const Testimonials: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayInterval = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const startAutoplay = useCallback(() => {
    if (autoplayInterval.current !== null) return;
    autoplayInterval.current = window.setInterval(handleNext, 5000);
  }, [handleNext]);

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval.current !== null) {
      clearInterval(autoplayInterval.current);
      autoplayInterval.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);
  
  const numVisible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-900/20 dark:bg-gray-900/20">
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-4">
            Trusted by <span className="text-primary">Innovators</span>
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            Our partners' success stories are the best measure of our impact.
          </p>
        </div>

        <div className="testimonial-carousel-wrapper" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
          <div className="testimonial-carousel-container">
            <div className="testimonial-carousel-slider" style={{ transform: `translateX(-${currentIndex * (100 / numVisible)}%)` }}>
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="testimonial-card px-4">
                    <div className="bg-dark-bg h-full p-8 rounded-lg border border-gray-700/50 flex flex-col">
                      <StarRating rating={testimonial.rating} />
                      <p className="text-gray-300 dark:text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center mt-auto">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-primary" />
                        <div>
                          <h4 className="font-bold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400 dark:text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handlePrev} className="carousel-button prev hidden md:flex" aria-label="Previous testimonial">
            &#8249;
          </button>
          <button onClick={handleNext} className="carousel-button next hidden md:flex" aria-label="Next testimonial">
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;