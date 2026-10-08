import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { profileData } from '../data/profile';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/journey', label: 'Journey' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="font-semibold text-gray-900 tracking-tight">
              {profileData.name.toUpperCase()}
            </NavLink>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary-600 rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <a href={profileData.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-4 py-1.5 bg-white text-primary-600 border border-primary-200 rounded-md font-medium text-sm transition-all hover:bg-primary-50 hover:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:-translate-y-0.5 shadow-sm">
              Resume
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a href={profileData.resumeUrl} target="_blank" rel="noreferrer" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
