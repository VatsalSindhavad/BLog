'use client';

import { useState, useEffect } from 'react';

interface ClapStickAnimationProps {
  onAnimationComplete: () => void;
}

export default function ClapStickAnimation({ onAnimationComplete }: ClapStickAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0); // 0: initial, 1: clap, 2: fade out

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase(1); // Start clap animation
    }, 1500);

    const timer2 = setTimeout(() => {
      setAnimationPhase(2); // Start fade out
    }, 3000);

    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-16">
      {/* Mystery movie title at top */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
          MYSTERY
        </h1>
        <div className="text-lg md:text-xl text-gray-400 font-light">
          Starring Vatsal Sindhavad
        </div>
        <div className="text-sm text-red-400 mt-2 tracking-wider">
          THE ML ENGINEER
        </div>
      </div>
      
      {/* Clapperboard in center with proper spacing */}
      <div className="flex flex-col items-center space-y-8">
        {/* Clapperboard container */}
        <div className="relative">
          {/* Main clapperboard body - mystery theme */}
          <div className="w-80 h-48 bg-black border-4 border-red-500 rounded-lg shadow-2xl relative overflow-hidden">
            {/* Top section - black with red text */}
            <div className="h-1/2 bg-black flex items-center justify-center">
              <div className="text-center">
                <div className="text-red-400 text-2xl font-bold mb-1 tracking-wider">MYSTERY</div>
                <div className="text-gray-400 text-sm">PRODUCTION</div>
              </div>
            </div>
            
            {/* Bottom section - dark red with white text */}
            <div className="h-1/2 bg-red-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-1">SCENE 1</div>
                <div className="text-sm">TAKE 1</div>
                <div className="text-xs mt-1 text-red-200">ML ENGINEER: Vatsal Sindhavad</div>
              </div>
            </div>
            
            {/* Hinge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-red-700 rounded-full"></div>
            
            {/* Clapper stick */}
            <div 
              className={`absolute top-0 right-0 w-32 h-2 bg-red-500 rounded-full transition-transform duration-500 ease-in-out ${
                animationPhase >= 1 ? 'rotate-12' : 'rotate-0'
              }`}
              style={{
                transformOrigin: 'left center',
              }}
            ></div>
          </div>
        </div>
        
        {/* Clap sound effect text - positioned below clapperboard */}
        {animationPhase >= 1 && (
          <div className="text-white text-3xl font-bold animate-pulse">
            CLAP!
          </div>
        )}
      </div>
      
      {/* Film strip effects - mystery theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-60"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-60"></div>
      </div>
      
      {/* Fade overlay */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          animationPhase >= 2 ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
}