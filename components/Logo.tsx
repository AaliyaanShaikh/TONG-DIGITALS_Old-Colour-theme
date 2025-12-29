
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isMinimal?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', isMinimal = false }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-48 h-48 md:w-80 md:h-80'
  };

  return (
    <div className={`relative flex items-center justify-center ${sizes[size]} ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl overflow-visible">
        <defs>
          <filter id="distressed">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <mask id="waves-mask">
            <rect x="0" y="0" width="200" height="200" fill="white" />
            <g stroke="black" strokeWidth="6" fill="none" transform="translate(0, 10)">
              <path d="M40 130 Q70 115 100 130 T160 130" />
              <path d="M40 145 Q70 130 100 145 T160 145" />
              <path d="M40 160 Q70 145 100 160 T160 160" />
            </g>
          </mask>
        </defs>

        {/* The Purple Cross-Arrow Structure */}
        <g filter="url(#distressed)" mask="url(#waves-mask)">
          <path 
            d="M35 175 L100 110 L165 175 L185 155 L120 90 L185 25 L145 25 L100 70 L55 25 L15 25 L80 90 L15 155 Z" 
            fill="#8B5CF6" 
          />
          {/* Detailed Arrowheads */}
          <path d="M15 25 L65 25 L15 75 Z" fill="#8B5CF6" />
          <path d="M185 25 L135 25 L185 75 Z" fill="#8B5CF6" />
        </g>
        
        {/* Visible Waves */}
        <g stroke="black" strokeWidth="3" fill="none" opacity="0.9" transform="translate(0, 10)">
          <path d="M55 130 Q77.5 115 100 130 T145 130" />
          <path d="M50 145 Q75 130 100 145 T150 145" />
          <path d="M45 160 Q72.5 145 100 160 T155 160" />
        </g>

        {/* TONG Text - Centered and Bold */}
        {!isMinimal && (
          <text 
            x="100" y="108" 
            textAnchor="middle" 
            className="font-black fill-white pointer-events-none" 
            style={{ fontSize: '38px', letterSpacing: '2px', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 900 }}
          >
            TONG
          </text>
        )}
      </svg>
    </div>
  );
};

export default Logo;
