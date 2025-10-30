
import React, { useState, useEffect, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { WHY_CHOOSE_US } from '../constants';

const CountUpNumber: React.FC<{ end: number, duration?: number, suffix: string }> = ({ end, duration = 2000, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                let start = 0;
                let startTime: number | null = null;
                const step = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    setCount(Math.floor(progress * end));
                    if (progress < 1) window.requestAnimationFrame(step);
                };
                window.requestAnimationFrame(step);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.5 });
        
        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        }
    }, [end, duration]);

    return <span ref={ref} className="text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{count}{suffix}</span>;
};


const WhyChooseUs: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="why-us" className="py-20 lg:py-32 bg-dark-bg dark:bg-dark-bg">
            <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-4">
                        Why Partner With <span className="text-primary">Starbridge</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {WHY_CHOOSE_US.map((item, index) => (
                        <div key={item.title} className="text-center p-8 bg-gray-900/20 rounded-lg border border-gray-700/30 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10" style={{ opacity: 0, animation: `slideInUp 1s ease-out ${index * 200}ms forwards`}}>
                            <div className="flex justify-center mb-6">
                                <div className="text-primary w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full border-2 border-primary/20">
                                    {/* FIX: Cast the icon to a ReactElement with a specific prop type to resolve the cloneElement error. */}
                                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "h-10 w-10" })}
                                </div>
                            </div>
                            <div className="mb-4">
                                <CountUpNumber end={item.value} suffix={item.suffix} />
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 dark:text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;