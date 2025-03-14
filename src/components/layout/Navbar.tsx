
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10',
        {
          'bg-white/80 backdrop-blur-md shadow-subtle': scroll,
          'bg-transparent': !scroll
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="relative flex items-end transition-opacity hover:opacity-90"
        >
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/881d5b12-fff1-45fe-93ba-7028634ea10d.png" 
              alt="Numu Tech Logo" 
              className="h-9 md:h-12 transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all duration-300',
                location.pathname === link.path
                  ? 'text-numutech-blue'
                  : 'text-gray-700 hover:text-numutech-blue hover:bg-gray-50'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white pt-20 px-6 transition-transform duration-300 ease-in-out transform md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-3 rounded-md text-base font-medium transition-colors duration-200',
                location.pathname === link.path
                  ? 'bg-numutech-gray text-numutech-blue'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-numutech-blue'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
