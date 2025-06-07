import React from 'react';
import ConcentricCircle from './ConcentricCircle';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const QuerySection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden flex items-center justify-center bg-gradient-to-r from-soft-beige to-light-pink">
      {/* Small black dot in upper left for visual balance */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-black rounded-full"></div>
      
      {/* Concentric circles with rotating animations - contained within a fixed size container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ maxWidth: '90vw', maxHeight: '90vh', margin: 'auto' }}>
        <div className="relative w-full h-full max-w-4xl max-h-4xl">
          <ConcentricCircle 
            size={700} 
            animationClass="animate-rotate-slow" 
            opacity={0.5}
            dots={[
              { angle: 80, color: "#ea384c" }
            ]}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <ConcentricCircle 
            size={500} 
            animationClass="animate-rotate-reverse"
            opacity={0.5}
            dots={[
              { angle: 200, color: "#ea384c" },
              { angle: 260, color: "#33C3F0" }
            ]}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <ConcentricCircle 
            size={300} 
            animationClass="animate-rotate-medium" 
            opacity={0.5}
            dots={[
              { angle: 300, color: "#ea384c" }
            ]}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Main content - text and button aligned per the image */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black tracking-tight leading-tight px-4">
          Have A<br />Project<br />In Mind?
        </h2>
        
        {/* Button with arrow icon in coral color */}
        <div className="mt-16">
          <Button 
            className="bg-transparent text-coral hover:bg-transparent text-lg font-normal flex items-center gap-2 px-0 py-0"
          >
            Let's Work Together <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuerySection;