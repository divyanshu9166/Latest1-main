'use client';

// This component checks if CSS variables are properly loaded
// and logs warnings if there are any issues.

import { useEffect } from 'react';

export default function CssVariableChecker() {
  useEffect(() => {
    // Function to check if CSS variables are properly loaded
    const checkCssVariables = () => {
      // Get the computed styles of the root element
      const rootStyles = getComputedStyle(document.documentElement);
      
      // List of all CSS variables we need to check
      const cssVariables = [
        '--colors--bg-color', 
        '--colors--font-color',
        '--colors--paragraph-font',
        '--colors--gradient-color-01',
        '--colors--acent-color',
        '--colors--element-color'
      ];
      
      // Check each variable
      const missingVariables = cssVariables.filter(variable => {
        const value = rootStyles.getPropertyValue(variable).trim();
        return !value || value === '';
      });
      
      // Log any missing variables
      if (missingVariables.length > 0) {
        console.warn('CSS Variables not loaded properly:', missingVariables.join(', '));
        console.warn('This might cause styling issues in the website.');
      } else {
        console.log('All CSS variables loaded successfully!');
      }
      
      // Return true if all variables are loaded
      return missingVariables.length === 0;
    };
    
    // Wait for the DOM to fully load
    if (document.readyState === 'complete') {
      checkCssVariables();
    } else {
      window.addEventListener('load', checkCssVariables);
      return () => window.removeEventListener('load', checkCssVariables);
    }
  }, []);
  
  // This component doesn't render anything
  return null;
}
