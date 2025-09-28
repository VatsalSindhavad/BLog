'use client';

import { useState } from "react";
import Image from "next/image";
import ClapStickAnimation from "@/components/ClapStickAnimation";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowMainContent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {!showMainContent && <ClapStickAnimation onAnimationComplete={handleAnimationComplete} />}
      
      {showMainContent && (
        <div className="animate-fadeIn">
          {/* Mystery movie-style header with film strip */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>

          <section className="text-white body-font relative py-8">
            <div className="container mx-auto flex px-8 py-8 md:flex-row flex-col items-center space-y-12 md:space-y-0">
              {/* Text content */}
              <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left items-center text-center space-y-8">
                <h1 className="title-font sm:text-6xl text-5xl font-bold text-white bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent drop-shadow-2xl">
                  Hi, I'm Vatsal Sindhavad
                </h1>
                <p className="leading-relaxed text-xl text-gray-400 max-w-lg font-light">
                  I'm an ML Engineer passionate about turning data into impactful solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="inline-flex text-white bg-gradient-to-r from-red-600 to-red-500 border-0 py-3 px-8 focus:outline-none hover:from-red-700 hover:to-red-600 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50">
                    Connect
                  </button>
                  <button className="inline-flex text-white bg-transparent border-2 border-red-500 py-3 px-8 focus:outline-none hover:bg-red-500 hover:text-white rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Explore
                  </button>
                </div>
              </div>
              
              {/* Image content */}
              <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 flex justify-center">
                {/* Mystery movie frame effect - portrait oriented */}
                <div className="relative p-6 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl shadow-2xl max-w-md w-full border-2 border-red-400">
                  <div className="bg-black rounded-2xl p-4 relative overflow-hidden">
                    <Image 
                      className="object-cover object-center rounded-xl w-full h-auto aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-500" 
                      width={400} 
                      height={533} 
                      alt="Vatsal Sindhavad - Software Developer" 
                      src="/images/VatsalSindhavad.webp"
                    />
                    {/* Mystery overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
                  </div>
                  {/* Film perforations - mystery theme */}
                  <div className="absolute left-0 top-0 w-3 h-full bg-red-600 rounded-l-3xl">
                    <div className="space-y-2 p-1.5">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-black rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 w-3 h-full bg-red-600 rounded-r-3xl">
                    <div className="space-y-2 p-1.5">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-black rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  {/* Mystery movie title overlay */}
                  <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-90 rounded-lg p-2 border border-red-500">
                    <div className="text-red-400 text-xs font-bold text-center tracking-wider">MYSTERY</div>
                    <div className="text-white text-sm font-semibold text-center">VATSAL SINDHAVAD</div>
                    <div className="text-gray-400 text-xs text-center">THE ML ENGINEER</div>
                  </div>
                </div>
              </div>
              
            </div>
          </section>

          {/* Mystery movie-style footer strip */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
        </div>
      )}
    </div>
  );
}
