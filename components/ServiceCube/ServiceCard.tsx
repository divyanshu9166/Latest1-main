import React from 'react';
import { ArrowUpIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  link: string;
  position: 'left' | 'right';
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  description, 
  link, 
  position, 
  index 
}) => {
  const isRight = position === 'right';
  const delay = index * 0.1;
  
  return (
    <div 
      className={`service-card transform transition-all duration-700 ease-out ${
        isRight ? 'md:ml-auto text-right' : ''
      }`}
      style={{ 
        animationDelay: `${delay}s`,
        maxWidth: '450px'
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
        {title}
      </h2>
      
      <h5 
        className={`text-xl md:text-2xl font-light mb-4 text-slide ${
          isRight ? 'text-slide-right' : 'text-slide-left'
        }`}
        style={{ 
          transitionDelay: `${0.1 + delay}s`,
          opacity: 0,
          transform: `translateX(${isRight ? '-20vw' : '20vw'})`
        }}
      >
        {description}
      </h5>
      
      <a 
        href={link}
        className="arrow-link inline-block relative"
        style={{ 
          transitionDelay: `${0.2 + delay}s`,
          opacity: 0,
          transform: 'translateY(10vw)'
        }}
      >
        <span className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 hover:bg-black hover:border-black group">
          <ArrowUpIcon className="h-5 w-5 transition-all duration-300 group-hover:text-white" />
        </span>
      </a>
    </div>
  );
};

export default ServiceCard;
