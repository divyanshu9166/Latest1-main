

import { useEffect, useRef, useState } from 'react';
import ContentSection from "../components/ContentSection";
import ServiceCube from "../components/ServiceCube";

const sections = [
  {
    title: "DESIGN",
    subtitle: "PROJECTS AND EXPERIENCES.",
    bgColor: "from-cyan-600 to-pink-600"
  },
  {
    title: "MARKETING", 
    subtitle: "CREATE A LASTING IMPACT.",
    bgColor: "from-blue-600 to-cyan-600"
  },
  {
    title: "CONCEPT",
    subtitle: "BRING YOUR VISION TO LIFE.",
    bgColor: "from-green-600 to-emerald-600"
  },
  {
    title: "BRANDING",
    subtitle: "ELEVATE YOUR PRESENCE.",
    bgColor: "from-orange-600 to-red-600"
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {    // Improved scroll progress calculation for smooth cube rotation
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;
      
      // Check if Index section is visible
      const isIndexVisible = containerTop < windowHeight && containerTop + containerHeight > 0;
      setIsVisible(isIndexVisible);
      
      // Only calculate when the container is in view
      if (!isIndexVisible) {
        return;
      }
      
      // Calculate overall progress through the entire Index component
      const totalProgress = Math.max(0, Math.min(1, -containerTop / (containerHeight - windowHeight)));
      
      // Smooth section-based progress
      const sectionProgress = totalProgress * (sections.length - 1);
      const currentSectionIndex = Math.floor(sectionProgress);
      
      // Update active section based on scroll position
      if (currentSectionIndex !== activeSection && currentSectionIndex >= 0 && currentSectionIndex < sections.length) {
        setActiveSection(currentSectionIndex);
      }
      
      // Set smooth scroll progress for cube rotation
      setScrollProgress(totalProgress);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [activeSection]);  return (
    <div ref={containerRef} className="relative w-full">
      {/* Cube Container - Only visible when Index section is in view */}
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center">
          <ServiceCube activeSection={activeSection} scrollProgress={scrollProgress} />
        </div>
      )}
      
      {/* Content Sections */}
      <div className="relative z-20">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            title={section.title}
            subtitle={section.subtitle}
            index={index}
            isActive={activeSection === index}
            bgGradient={section.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
