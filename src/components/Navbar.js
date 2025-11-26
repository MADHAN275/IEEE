import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/board', label: 'Board' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const NavLink = ({ to, label, isMobile = false }) => {
    const handleClick = () => {
      if (isMobile) {
        closeMenu();
      }
      if (location.pathname === '/' && to.startsWith('/#')) {
        const sectionId = to.substring(2);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/' && to.startsWith('/#')) {
      return (
        <Link
          to={`/${to.substring(2)}`}
          className="font-bold hover:text-gray-400 relative block py-2"
          onClick={handleClick}
        >
          {label}
        </Link>
      );
    }
    
    if (to.startsWith('/#')) {
       const sectionId = to.substring(2);
       return (
         <a
            href={`#${sectionId}`}
            className="font-bold hover:text-gray-400 relative block py-2"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
              document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {label}
          </a>
       )
    }

    return (
      <Link
        to={to}
        className="font-bold hover:text-gray-400 relative block py-2"
        onClick={handleClick}
      >
        {label}
      </Link>
    );
  };

  const homeLinks = [
    { to: '/#home', label: 'Home' },
    { to: '/#about', label: 'About' },
    { to: '/#board', label: 'Board' },
    { to: '/#events', label: 'Events' },
    { to: '/#contact', label: 'Contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl text-white p-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/KITS.png" alt="KITS Logo" className="h-8 mr-2 object-contain" />
          <img src="/IEEE LOGO.png" alt="IEEE CS KITS Logo" className="h-8 mr-2 object-contain" />
          <span className="text-base sm:text-xl">IEEE CS KITS</span>
        </Link>
        <div className="hidden md:flex space-x-8 relative">
          <AnimatePresence>
            {(location.pathname === '/' ? homeLinks : links).map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </AnimatePresence>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="flex flex-col items-center space-y-4 mt-4">
              {(location.pathname === '/' ? homeLinks : links).map((link) => (
                <NavLink key={link.to} {...link} isMobile={true} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;