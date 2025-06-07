import React, { useState, useEffect } from 'react';
import ServiceCube from './ServiceCube/ServiceCube';

const ServiceCubeWithScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollTop / documentHeight, 1);
      setScrollProgress(progress);
      
      // Calculate active section based on scroll position
      const section = Math.floor(progress * 4); // 4 sections for the cube faces
      setActiveSection(Math.min(section, 3));
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial values
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <ServiceCube 
        activeSection={activeSection} 
        scrollProgress={scrollProgress} 
      />
    </div>
  );
};

export default ServiceCubeWithScroll;
