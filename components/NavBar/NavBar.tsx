// components/NavBar.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from  '../theme/ThemeToggleClient';


const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="shadow-lg fixed w-full z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" 
                  className="text-4xl font-bold tracking-wider  px-4 py-2 rounded-lg transition-all duration-200"
                  style={{ 
                    textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                    textDecoration: 'bold',
                    letterSpacing: '0.2em'
                  }}>
              I R I I S
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            <Link 
              href="/" 
              className="text-xl font-bold  px-5 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-xl font-bold  px-5 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
            >
              About
            </Link>
            <Link 
              href="/research" 
              className="text-xl font-bold  px-5 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
            >
              Research
            </Link>
            <Link 
              href="/learn" 
              className="text-xl font-bold  px-5 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
            >
              Learn
            </Link>
            <Link 
              href="/contact" 
              className="text-xl font-bold  px-5 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
            >
              Contact
            </Link>
            <div className='border-2 border-solid rounded-lg border-foreground'>
              <ModeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="ml-3">
            <ModeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className="text-xl font-medium block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-xl font-medium block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
          >
            About
          </Link>
          <Link 
            href="/research" 
            className="text-xl font-medium block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
          >
            Research
          </Link>
          <Link 
            href="/learn" 
            className="text-xl font-medium block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
          >
            Learn
          </Link>
          <Link 
            href="/contact" 
            className="text-xl font-medium block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md active:bg-gray-200"
          >
            Contact
          </Link>
            

        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;


