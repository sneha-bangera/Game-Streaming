'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Heaven Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-wider text-white">HEAVEN</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/event" className="text-gray-300 hover:text-white transition-colors">
              Events
            </a>
            <a href="/jobs" className="text-gray-300 hover:text-white transition-colors">
              Jobs
            </a>
            <a href="/profile" className="text-gray-300 hover:text-white transition-colors">
              Profile
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/login">
              <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
                LOGIN
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <a 
              href="/" 
              className="block text-gray-300 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/event" 
              className="block text-gray-300 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <a 
              href="/jobs" 
              className="block text-gray-300 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jobs
            </a>
            <a 
              href="/profile" 
              className="block text-gray-300 hover:text-white py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </a>
            <a 
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                LOGIN
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
