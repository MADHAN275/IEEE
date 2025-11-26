import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#board', label: 'Board' },
  { to: '#events', label: 'Events' },
  { to: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl text-white p-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center text-2xl font-bold text-white">
          <img src="/KITS.png" alt="KITS Logo" className="h-8 mr-2 object-contain" />
          <img src="/IEEE LOGO.png" alt="IEEE CS KITS Logo" className="h-8 mr-2 object-contain" />
          <span>IEEE CS KITS</span>
        </a>
        <div className="hidden md:flex space-x-8 relative">
          <AnimatePresence>
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="font-bold hover:text-gray-400 relative"
                onMouseEnter={() => setHoveredLink(link.to)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
                {hoveredLink === link.to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-white"
                  />
                )}
              </a>
            ))}
          </AnimatePresence>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;