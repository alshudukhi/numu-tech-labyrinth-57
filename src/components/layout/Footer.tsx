import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/78081387-0c21-495b-a47f-642596b919ab.png" 
                alt="Numu Tech Logo" 
                className="h-12 md:h-14" 
              />
            </Link>
            <p className="text-gray-600 mt-4 max-w-xs">
              Your trusted and reliable partner in the world of Digital Transformation.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="https://numutech.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-numutech-blue hover:bg-gray-200 transition-colors duration-300"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
              <a 
                href="mailto:info@numutech.net" 
                className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-numutech-blue hover:bg-gray-200 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+966536608090" 
                className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-numutech-blue hover:bg-gray-200 transition-colors duration-300"
                aria-label="Phone"
              >
                <PhoneCall size={18} />
              </a>
            </div>
          </div>

          <div className="md:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-600 hover:text-numutech-blue transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex">
                <Globe className="flex-shrink-0 h-5 w-5 text-numutech-blue mr-3" />
                <a 
                  href="https://numutech.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-numutech-blue transition-colors duration-200"
                >
                  numutech.net
                </a>
              </li>
              <li className="flex">
                <Mail className="flex-shrink-0 h-5 w-5 text-numutech-blue mr-3" />
                <a 
                  href="mailto:info@numutech.net"
                  className="hover:text-numutech-blue transition-colors duration-200"
                >
                  info@numutech.net
                </a>
              </li>
              <li className="flex">
                <PhoneCall className="flex-shrink-0 h-5 w-5 text-numutech-blue mr-3" />
                <a 
                  href="tel:+966536608090"
                  className="hover:text-numutech-blue transition-colors duration-200"
                >
                  +966 536608090
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Numu Tech. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Designed with excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
