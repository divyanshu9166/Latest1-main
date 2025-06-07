import { useEffect, useRef, useState } from 'react';
import ContentSection from "../components/ContentSection";
import ServiceCube from "../components/ServiceCube";

const sections = [
  {
    title: "DESIGN",
    subtitle: "PROJECTS AND EXPERIENCES.",
    bgColor: "from-purple-600 to-pink-600"
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
  const [cubePosition, setCubePosition] = useState<'sticky' | 'fixed' | 'sticky-bottom'>('sticky');
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;
      const windowMiddle = windowHeight / 2;
      
      // Get DESIGN section (first) and BRANDING section (last)
      const designSection = sectionsRef.current[0];
      const brandingSection = sectionsRef.current[sections.length - 1];
      
      if (!designSection || !brandingSection || !cubeRef.current) return;
      
      const designRect = designSection.getBoundingClientRect();
      const brandingRect = brandingSection.getBoundingClientRect();
      
      // Calculate scroll progress through DESIGN to BRANDING
      const startPoint = designRect.top;
      const endPoint = brandingRect.bottom;
      const totalDistance = endPoint - startPoint;
      
      let progress = 0;
      if (totalDistance > 0) {
        progress = Math.max(0, Math.min(1, (windowMiddle - startPoint) / totalDistance));
      }
      setScrollProgress(progress);
      
      // Update cube position based on scroll position
      if (designRect.top > windowMiddle) {
        // Cube is sticky to DESIGN section (top)
        setCubePosition('sticky');
      } else if (brandingRect.bottom > windowMiddle) {
        // Cube is fixed in the center
        setCubePosition('fixed');
      } else {
        // Cube is sticky to BRANDING section (bottom)
        setCubePosition('sticky-bottom');
      }
      
      // Update active section based on scroll position
      const sectionProgress = progress * (sections.length - 1);
      const currentSectionIndex = Math.floor(sectionProgress);
      if (currentSectionIndex !== activeSection && currentSectionIndex >= 0 && currentSectionIndex < sections.length) {
        setActiveSection(currentSectionIndex);
      }
    };

    // Throttle scroll events
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
  }, [activeSection]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Cube Container with dynamic positioning */}
      <div 
        ref={cubeRef}
        className={`pointer-events-none z-30 flex items-center justify-center ${
          cubePosition === 'sticky' ? 'absolute top-0' : 
          cubePosition === 'sticky-bottom' ? 'absolute bottom-0' : 
          'fixed'
        }`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          transition: 'top 0.1s ease, bottom 0.1s ease',
          ...(cubePosition === 'fixed' ? { 
            top: '50%', 
            transform: 'translate(-50%, -50%)' 
          } : {})
        }}
      >
        <ServiceCube activeSection={activeSection} scrollProgress={scrollProgress} />
      </div>
      
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