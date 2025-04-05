import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-gray-900 z-50">
      {/* Left Side (Logo + Icon) */}
      <div className="flex items-center sm:gap-x-4 gap-x-2">
        <a href="#" className="md:text-2xl sm:text-xl text-lg text-yellow-500 hover:text-yellow-400 transition-colors">
          Nadere Za
        </a>
        <i className="bx bx-sun md:text-3xl sm:text-2xl text-xl text-gray-200 hover:text-yellow-400 sm:ml-4 ml-2 cursor-pointer transition-colors"></i>
      </div>

      {/* Right Side (Navigation Links) */}
      <div className="flex items-center">
        <a
          href="#"
          className="lg:text-lg md:text-base text-sm font-light text-yellow-500 hover:text-yellow-400 tracking-wide transition-colors"
        >
          Home
        </a>
      </div>
    </div>
  );
};

export default Navbar;