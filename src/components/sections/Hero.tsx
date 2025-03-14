
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealText from '@/components/ui/RevealText';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate movement based on mouse position
      const moveX = (clientX / innerWidth - 0.5) * 20;
      const moveY = (clientY / innerHeight - 0.5) * 20;
      
      // Apply parallax effect to the shapes
      const elements = parallaxRef.current.querySelectorAll('.parallax-shape');
      elements.forEach((el, index) => {
        const speedFactor = index * 0.2 + 0.5;
        (el as HTMLElement).style.transform = `translate(${moveX * speedFactor}px, ${moveY * speedFactor}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 px-6 md:px-10 overflow-hidden">
      {/* Background shapes */}
      <div ref={parallaxRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-shape absolute top-[20%] right-[10%] w-24 h-24 md:w-32 md:h-32 bg-numutech-blue opacity-5 rounded-full blur-xl"></div>
        <div className="parallax-shape absolute bottom-[30%] left-[10%] w-32 h-32 md:w-40 md:h-40 bg-numutech-pink opacity-5 rounded-full blur-xl"></div>
        <div className="parallax-shape absolute top-[60%] right-[20%] w-20 h-20 md:w-24 md:h-24 bg-numutech-blue opacity-5 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10 text-center lg:text-left">
            <RevealText 
              className="inline-block mb-3 px-3 py-1 bg-numutech-gray rounded-full text-numutech-blue text-sm font-medium"
              delay={100}
            >
              Digital Transformation Partner
            </RevealText>
            
            <RevealText className="mt-4" delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
                We bring expertise and{' '}
                <span className="text-numutech-blue">innovation</span> together
              </h1>
            </RevealText>
            
            <RevealText delay={500}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8">
                Elevate your business in the dynamic landscape of technology. Join us in the journey towards innovation, security and success.
              </p>
            </RevealText>
            
            <RevealText className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4" delay={700}>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 text-white bg-numutech-blue rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300"
              >
                <span>Our Services</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <button
                onClick={scrollToServices}
                className="inline-flex items-center px-6 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <span>Explore</span>
                <ChevronDown size={18} className="ml-2" />
              </button>
            </RevealText>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-numutech-blue/10 to-numutech-pink/10 rounded-xl transform rotate-3 scale-105 animate-float"></div>
              <div className="relative bg-white rounded-xl border border-gray-100 shadow-subtle overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="mb-6 grid grid-cols-3 gap-3">
                    {['Cybersecurity', 'IT Solutions', 'AI Solutions', 'Training', 'Data Analytics'].map((service, idx) => (
                      <div 
                        key={idx} 
                        className="animate-fade-in-up" 
                        style={{ animationDelay: `${idx * 100 + 300}ms` }}
                      >
                        <div className="aspect-square bg-numutech-gray rounded-lg flex items-center justify-center p-2">
                          <div className="w-full h-full rounded bg-numutech-blue bg-opacity-10"></div>
                        </div>
                        <p className="text-xs text-center mt-1 text-gray-700 truncate">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 animate-fade-in" style={{ animationDelay: '900ms' }}>
                    <div className="h-2.5 bg-numutech-gray rounded-full w-3/4"></div>
                    <div className="h-2.5 bg-numutech-gray rounded-full"></div>
                    <div className="h-2.5 bg-numutech-gray rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToServices}
          className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-700 hover:text-numutech-blue transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
