import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { letters, professionTexts } from '../data/index';

const Hero = () => {
  // State for tracking which letter is currently hovered (for hover animations)
  const [hoveredLetter, setHoveredLetter] = useState(null);
  
  // State for the currently displayed profession text
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  
  // State for tracking the current index in the professionTexts array
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Animation timing configuration
    const textChangeDelay = 300; // Delay before text changes (ms)
    const rotationInterval = 4000; // Time between rotations (ms)

    // Set up the text rotation interval
    const interval = setInterval(() => {
      setTimeout(() => {
        // Calculate next index with wrap-around
        const nextIndex = (currentIndex + 1) % professionTexts.length;
        setCurrentIndex(nextIndex);
        setCurrentText(professionTexts[nextIndex]);
      }, textChangeDelay);
    }, rotationInterval);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]); // Add currentIndex to dependency array

  return (
    /**
     * Hero Section Container
     * - Takes full viewport height (h-screen)
     * - Uses flex column layout
     * - Centers content both horizontally and vertically
     */
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* Navigation Bar Component */}
      <Navbar />

      {/* Main Content Container */}
      <div className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-20 mb-0">
        {/* Animated Letter Heading Section */}
        <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bold text-yellow-500">
          {/* Letter Hover Animation Row */}
          <span className="flex">
            {letters.map((letter, index) => (
              /**
               * Individual Letter Container
               * - Shows hover image when moused over
               * - Has custom negative margins for overlapping effect
               * - Uses relative positioning for absolute-positioned hover images
               */
              <span
                key={`letter-${index}`}
                className="inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative"
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {/* Letter Character Display */}
                {letter.char}

                {/* Hover Image (shown only when letter is hovered) */}
                <img
                  src={letter.img}
                  alt={`Visual representation for ${letter.char}`}
                  className={`xl:h-36 h-24 absolute bottom-full -translate-x-1/2 ${
                    letter.rotate || ""
                  } transition-opacity duration-300 ${
                    hoveredLetter === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            ))}
          </span>

          {/* Profession Text Display with Rotating Text */}
          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2">
            I'm{" "}
            <span className="inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold text-yellow-500">
              {currentText}
            </span>{" "}
            Web Developer
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;