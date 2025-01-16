"use client"
import React from 'react'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const menuItems = [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-neutral-50 shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Name */}
              <div className="flex-shrink-0">
                <a href="#home" className="text-xl font-bold text-green-500">
                  SADIK.
                </a>
              </div>
    
              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className=" text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
    
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
    
            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      );
}

export default Nav