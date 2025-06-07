import React, { useEffect, useRef, useState } from 'react';
import Cube from './Cube';
import './styles.css';

interface ServiceCubeProps {
  activeSection: number;
  scrollProgress: number;
}

const ServiceCube: React.FC<ServiceCubeProps> = ({ activeSection, scrollProgress }) => {
  const [scrollRotation, setScrollRotation] = useState({ x: 0, y: 0, z: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  // Speed multiplier - adjust this value to control rotation speed
  // 1.0 = normal speed, 0.5 = half speed, 0.3 = slow, 0.1 = very slow
  const rotationSpeed = 1.0;
  
  // Helper function to normalize angles to prevent rotation issues
  const normalizeAngle = (angle: number): number => {
    return ((angle % 360) + 360) % 360;
  };

  // Helper function to find the shortest rotation path between two angles
  const getShortestRotation = (from: number, to: number): number => {
    const diff = to - from;
    const normalizedDiff = ((diff + 180) % 360) - 180;
    return from + normalizedDiff;
  };
  
  // Define rotation states for each section to align with text content
  const rotationStates = [
        { x: 0, y: 0, z: 0 },        // DESIGN - Initial state
      { x: 0, y: 90, z: 0 },       // MARKETING - Simple horizontal rotation
      { x: 90, y: 0, z: 0 },   // CONCEPT - Multi-axis: tilt + horizontal + twist
      { x: 0, y:180, z: 0 }  // BRANDING - Multi-axis: more tilt + horizontal + counter-twist

    ];
  useEffect(() => {
    // Calculate which section we're transitioning between based on scroll progress
    const totalSections = rotationStates.length;
    const maxProgress = totalSections - 1; // Maximum progress for interpolation
    const sectionProgress = scrollProgress * maxProgress;
    const currentSectionIndex = Math.floor(sectionProgress);
    const nextSectionIndex = Math.min(currentSectionIndex + 1, totalSections - 1);
    const transitionProgress = sectionProgress - currentSectionIndex;

    // Get current and next rotation states
    const currentRotation = rotationStates[currentSectionIndex] || rotationStates[0];
    const nextRotation = rotationStates[nextSectionIndex] || rotationStates[totalSections - 1];

    // Simple linear interpolation without complex angle calculations
    const smoothRotation = {
      x: (currentRotation.x + (nextRotation.x - currentRotation.x) * transitionProgress) * rotationSpeed,
      y: (currentRotation.y + (nextRotation.y - currentRotation.y) * transitionProgress) * rotationSpeed,
      z: (currentRotation.z + (nextRotation.z - currentRotation.z) * transitionProgress) * rotationSpeed
    };
    
    setScrollRotation(smoothRotation);
  }, [scrollProgress]);// Smooth interpolation based on scroll progress
  return (
    <div 
      ref={containerRef}
      className="cube-wrapper w-64 h-64 md:w-80 md:h-80 pointer-events-none"
      style={{
        filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.4))',
        transition: 'none', // Remove transition to prevent stuttering with scroll-based animation
        perspective: '1500px', // Enhanced perspective for better 3D effect
        perspectiveOrigin: 'center center'
      }}
    >
      <Cube rotation={scrollRotation} />
    </div>
  );
};

export default ServiceCube;