
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Contact from '@/components/sections/Contact';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash links for smooth scrolling
    const handleHashLinks = () => {
      if (window.location.hash) {
        const elementId = window.location.hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Execute after DOM is fully loaded
    setTimeout(handleHashLinks, 100);
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashLinks);
    
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashLinks);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
