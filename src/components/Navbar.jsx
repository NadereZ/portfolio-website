import React from 'react';

const Navbar = () => {
  return (
    /**
     * Main Navbar Container
     * - Fixed at the top of the page
     * - Responsive height and padding
     * - Dark background with flex layout
     */
    <div className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-gray-900 z-50">
      
      {/* Left Section - Logo/Brand and Theme Toggle */}
      <div className="flex items-center sm:gap-x-4 gap-x-2">
        {/* Brand Logo/Link */}
        <a
          href="#"
          className="md:text-2xl sm:text-xl text-lg text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          Nadere Za
        </a>
        
        {/* Theme Toggle Icon (Sun) */}
        <i className="bx bx-sun md:text-3xl sm:text-2xl text-xl text-gray-200 hover:text-yellow-400 sm:ml-4 ml-2 cursor-pointer transition-colors"></i>
      </div>

      {/* Right Section - Navigation Links */}
      <div className="flex items-center gap-x-8">
        {/* Home Link with Active Yellow Color */}
        <a
          href="#"
          className="group lg:text-lg md:text-base text-sm font-light text-yellow-500 hover:text-yellow-400 tracking-wide transition-colors relative"
        >
          Home
          {/* Animated Underline Effect */}
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>

        {/* Services Link */}
        <a
          href="#"
          className="group lg:text-lg md:text-base text-sm font-light text-white hover:text-white tracking-wide transition-colors relative"
        >
          Services
          {/* Animated Underline Effect */}
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>

        {/* Contact Link */}
        <a
          href="#"
          className="group lg:text-lg md:text-base text-sm font-light text-white hover:text-white tracking-wide transition-colors relative"
        >
          Contact
          {/* Animated Underline Effect */}
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;