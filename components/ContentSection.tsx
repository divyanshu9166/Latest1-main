
import { forwardRef } from 'react';

interface ContentSectionProps {
  title: string;
  subtitle: string;
  index: number;
  isActive: boolean;
  bgGradient: string;
}

const ContentSection = forwardRef<HTMLElement, ContentSectionProps>(
  ({ title, subtitle, index, isActive, bgGradient }, ref) => {
    const isEven = index % 2 === 0;
    
    return (
      <section
        ref={ref}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-10 transition-opacity duration-700 ${isActive ? 'opacity-20' : 'opacity-5'}`}></div>
        
        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10">
          <div className={`flex items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
            
            {/* Text Content */}
            <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} text-center md:text-left`}>
              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 transition-all duration-700 ${isActive ? 'opacity-100 transform translate-y-0' : 'opacity-60 transform translate-y-8'}`}>
                {title}
              </h1>
              <p className={`text-xl md:text-2xl text-gray-300 font-light tracking-wider transition-all duration-700 delay-200 ${isActive ? 'opacity-100 transform translate-y-0' : 'opacity-40 transform translate-y-4'}`}>
                {subtitle}
              </p>
              
              {/* Decorative Line */}
              <div className={`mt-8 h-1 bg-gradient-to-r ${bgGradient} transition-all duration-700 delay-400 ${isActive ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>

            {/* Empty space where cube used to be */}
            <div className="hidden md:block w-1/2"></div>
          </div>
        </div>

        {/* Section Number */}
        <div className={`absolute bottom-8 right-8 text-8xl font-black text-white transition-all duration-700 ${isActive ? 'opacity-20' : 'opacity-5'}`}>
          0{index + 1}
        </div>
      </section>
    );
  }
);

ContentSection.displayName = 'ContentSection';

export default ContentSection;
