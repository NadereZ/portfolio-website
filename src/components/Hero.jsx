import React, { useState } from 'react';
import Navbar from './Navbar';
import { letters } from '../data/index';

const Hero = () => {
  // State to track which letter is currently hovered
  const [hoveredLetter, setHoveredLetter] = useState(null);

  return (
    /**
     * Hero Section Container
     * - Full viewport height
     * - Flex column layout
     * - Centered content
     */
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-20 mb-0">
        {/* Animated Letter Heading */}
        <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bold text-yellow-500">
          <span className="flex">
            {letters.map((letter, index) => (
              /**
               * Individual Letter Container
               * - Shows hover image when moused over
               * - Custom positioning for each letter
               */
              <span
                key={index}  // Changed to use index as key for better performance
                className="inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative"
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {/* Letter Character */}
                {letter.char}

                {/* Hover Image */}
                <img
                  src={letter.img}
                  alt={`Hover image for ${letter.char}`}  // More descriptive alt text
                  className={`xl:h-36 h-24 absolute bottom-full -translate-x-1/2 ${
                    letter.rotate || ''
                  } transition-opacity duration-300 ${
                    hoveredLetter === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            ))}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;