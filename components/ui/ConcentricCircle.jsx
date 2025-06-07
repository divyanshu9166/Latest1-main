"use client";

import React from 'react';
import { cn } from '../../lib/utils';

/**
 * @typedef {Object} Dot
 * @property {number} angle
 * @property {string} color
 */

/**
 * @param {Object} props
 * @param {number} props.size
 * @param {string} [props.strokeColor="#F0E4E2"]
 * @param {number} [props.strokeWidth=1]
 * @param {string} [props.animationClass=""]
 * @param {Dot[]} [props.dots=[]]
 * @param {string} [props.className=""]
 * @param {number} [props.opacity=1]
 */
const ConcentricCircle = ({
  size,
  strokeColor = "#F0E4E2",
  strokeWidth = 1,
  animationClass = "",
  dots = [],
  className = "",
  opacity = 1,
}) => {
  const radius = size / 2 - strokeWidth / 2;
  const center = size / 2;

  return (
    <div className={cn("absolute", className)}>
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

export default ConcentricCircle;