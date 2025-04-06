import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { letters, professionTexts } from '../data/index';

const Hero = () => {
  // State Management
  const [hoveredLetter, setHoveredLetter] = useState(null); // Tracks hover state for letter images
  const [currentText, setCurrentText] = useState(professionTexts[0]); // Current rotating text
  const [currentIndex, setCurrentIndex] = useState(0); // Index tracker for text rotation
  const [isRotating, setIsRotating] = useState(false); // Controls rotation animation state

  // Text rotation effect with animation
  useEffect(() => {
    const textChangeDelay = 300; // Animation duration for text change
    const rotationInterval = 4000; // Time between text rotations

    const interval = setInterval(() => {
      setIsRotating(true); // Trigger rotation animation
      
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % professionTexts.length;
        setCurrentIndex(nextIndex);
        setCurrentText(professionTexts[nextIndex]);
        setIsRotating(false); // Reset animation state
      }, textChangeDelay);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    /**
     * Hero Section Container
     * - Full viewport height with centered content
     * - Isolate property prevents stacking context issues
     * - Dark background inherited from parent
     */
    <div className="w-full h-screen flex flex-col justify-center items-center isolate relative">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-20 mb-0">
        {/* Animated Heading Container */}
        <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bold text-yellow-500">
          {/* Interactive Letters Section */}
          <span className="flex relative z-20">
            {letters.map((letter, index) => (
              /**
               * Letter Container with Hover Effect
               * - Negative margins create overlapping effect
               * - Displays image on hover
               */
              <span
                key={`letter-${index}`}
                className="inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative"
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {letter.char}
                {/* Hover Image */}
                <img
                  src={letter.img}
                  alt={`Icon for ${letter.char}`}
                  className={`xl:h-36 h-24 absolute bottom-full -translate-x-1/2 ${
                    letter.rotate || ''
                  } transition-opacity duration-300 ${
                    hoveredLetter === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </span>
            ))}
          </span>

          {/* Animated Profession Text */}
          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden relative z-20">
            I'm{' '}
            <span
              className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold transform origin-left transition-transform duration-300 ease-out text-yellow-500 ${
                isRotating ? 'rotate-[30deg]' : 'rotate-0'
              }`}
              aria-live="polite" // Accessibility improvement for screen readers
            >
              {currentText}
            </span>{' '}
            Web Developer
          </span>
        </h1>

        {/* Decorative Road Image */}
        <div className="lg:w-[600px] md:w-[500px] w-[350px] absolute left-1/2 -translate-x-1/2 z-2 bottom-0">
          <img 
            src="/road.png" // Updated public path reference
            alt="Decorative road illustration" 
            className="w-full mx-auto" // Added subtle animation
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;