"use client";
import { useRef, useEffect } from 'react';

/**
 * A hook that adds a 3D card tilt effect to an element
 * @returns {React.RefObject} A ref to attach to the element you want to apply the effect to
 */
const useCard3DEffect = () => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    // Variables for the tilt effect
    const maxRotation = 10; // Maximum rotation in degrees
    
    // Handle mouse move event
    const handleMouseMove = (e) => {
      if (!card) return;
      
      // Calculate the card's dimensions and position
      const rect = card.getBoundingClientRect();
      
      // Get the mouse position relative to the card
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation values
      const rotateY = ((x / rect.width) * 2 - 1) * maxRotation;
      const rotateX = ((y / rect.height) * 2 - 1) * -maxRotation;
      
      // Apply the 3D effect
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    // Handle mouse leave event - reset the transform
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s ease';
    };
    
    // Handle mouse enter event - remove transition for smooth movement
    const handleMouseEnter = () => {
      card.style.transition = 'transform 0.1s ease';
    };
    
    // Add event listeners
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    
    // Cleanup function to remove event listeners
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  return cardRef;
};

export default useCard3DEffect;