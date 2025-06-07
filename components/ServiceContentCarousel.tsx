import React, { useState, useEffect, useRef } from 'react';
import ServiceCube from './ServiceCube';
import ContentSection from './ContentSection';

const ServiceContentCarousel: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // Define service content data
  const services = [
    {
      title: "DESIGN",
      subtitle: "Creative Visual Solutions",
      bgGradient: "from-purple-600 to-blue-600"
    },
    {
      title: "MARKETING",
      subtitle: "Strategic Brand Growth",
      bgGradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "CONCEPT",
      subtitle: "Innovative Ideas & Planning",
      bgGradient: "from-cyan-600 to-green-600"
    },
    {
      title: "BRANDING",
      subtitle: "Identity & Recognition",
      bgGradient: "from-green-600 to-yellow-600"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate if the container is in view
      const isInView = top < windowHeight && (top + height) > 0;
      
      if (isInView) {
        // Calculate scroll progress within the container
        const scrolled = Math.max(0, windowHeight - top);
        const maxScroll = height + windowHeight;
        const progress = Math.min(1, scrolled / maxScroll);
        
        setScrollProgress(progress);
        
        // Determine active section based on scroll progress
        const sectionIndex = Math.floor(progress * services.length);
        const clampedIndex = Math.max(0, Math.min(services.length - 1, sectionIndex));
        setActiveSection(clampedIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* Service Cube Section */}
      <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Service Cube */}
            <div className="hidden md:flex w-1/2 justify-center">
              <ServiceCube 
                activeSection={activeSection} 
                scrollProgress={scrollProgress} 
              />
            </div>
            
            {/* Current Service Info */}
            <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                OUR SERVICES
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Scroll to explore our comprehensive service offerings
              </p>
              
              {/* Service indicators */}
              <div className="flex justify-center md:justify-start space-x-4 mb-8">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeSection 
                        ? 'bg-white scale-125' 
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              {/* Current service title */}
              <div className="text-center md:text-left">
                <h3 className={`text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r ${services[activeSection]?.bgGradient} bg-clip-text text-transparent`}>
                  {services[activeSection]?.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {services[activeSection]?.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {services.map((service, index) => (
        <ContentSection
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          title={service.title}
          subtitle={service.subtitle}
          index={index}
          isActive={activeSection === index}
          bgGradient={service.bgGradient}
        />
      ))}
    </div>
  );
};

export default ServiceContentCarousel;
