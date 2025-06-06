"use client";

import React from 'react';
import Link from 'next/link';
// import '../project-title.css'; // Assuming this CSS is not critical or its styles are replicated/unneeded

const ClickHandler = () => {
    window.scrollTo(0, 0); // Standard scroll to top
};

// Define the inline styles for animations
const animationStyles = `
  .animate-rotate-slow {
    animation: rotateSlow 25s linear infinite;
  }
  
  .animate-rotate-medium {
    animation: rotateMedium 20s linear infinite;
  }
  
  .animate-rotate-fast {
    animation: rotateFast 15s linear infinite; /* Retained even if not used by current circles */
  }
  
  .animate-rotate-reverse {
    animation: rotateReverse 22s linear infinite;
  }
  
  @keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateMedium {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateFast {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateReverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
`;

// ConcentricCircle component for the rotating circles
const ConcentricCircle = ({
  size,
  strokeColor = "#000000",
  strokeWidth = 1,
  animationClass = "",
  dots = [],
  className = "",
  opacity = 1,
}) => {
  const radius = size / 2 - strokeWidth / 2;
  const center = size / 2;

  return (
    <div className={`absolute ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={animationClass}
        style={{ opacity }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {dots.map((dot, index) => {
          const x = center + radius * Math.cos(dot.angle * (Math.PI / 180));
          const y = center + radius * Math.sin(dot.angle * (Math.PI / 180));
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={3}
              fill={dot.color}
            />
          );
        })}
      </svg>
    </div>
  );
};

// Main QueryProjectSection component
const QueryProjectSection = () => {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden flex items-center justify-center">
      {/* Add style tag for the circle animations */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
        {/* Background gradient - adjusted for better contrast with black circles */}
      <div className="absolute inset-0 bg-[#d8dde4]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.6)_40%,_rgba(36,65,197,0.2)_75%,_rgba(0,0,0,0.4)_95%)]"></div>
      </div>
      
    
      
      
      {/* Rotating concentric circles - using a fixed position centered container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px]">          {/* Largest circle - Slowest rotation */}
          <ConcentricCircle 
            size={700} 
            animationClass="animate-rotate-slow" 
            opacity={0.3}
            strokeColor="#000000"
            strokeWidth={0.75}
            dots={[
              { angle: 80, color: "#FF3D00" }
            ]}
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          {/* Medium circle - Reverse rotation */}
          <ConcentricCircle 
            size={500} 
            animationClass="animate-rotate-reverse"
            opacity={0.3}
            strokeColor="#000000"
            strokeWidth={0.75}
            dots={[
              { angle: 200, color: "#FF3D00" },
              { angle: 260, color: "#33C3F0" }
            ]}
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          {/* Smallest circle - Medium rotation */}
          <ConcentricCircle 
            size={300} 
            animationClass="animate-rotate-medium" 
            opacity={0.3}
            strokeColor="#000000"
            strokeWidth={0.75}
            dots={[
              { angle: 300, color: "#FF3D00" }
            ]}
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>      {/* Main content - positioned on top of circles */}
        <div className="absolute space-y-4 md:space-y-6 lg:space-y-8  items-center text-center">
    <h4 className="text-6xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight leading-tight px-4 mb-4">
      Have A
    </h4>
    <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black tracking-tight leading-tight px-4 my-8">
      Project
    </h2>
    <h4 className="text-6xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight leading-tight px-4 mt-4">
      In Mind?
    </h4>
  </div>
        
        
        <div className="mt-16">
          <Link 
            href="/contact" 
            onClick={ClickHandler} 
            className="text-[#FF3D00] text-lg font-medium flex items-center gap-2 hover:text-[#e83500] transition-colors"
          >
            Let's Work Together 
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      
    </section>
  );
};

export default QueryProjectSection;
      
         
        
