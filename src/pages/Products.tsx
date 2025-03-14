
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RevealText from '@/components/ui/RevealText';
import ProductCard from '@/components/ui/ProductCard';
import { Shield, Target } from 'lucide-react';

const Products = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Rashed Tool",
      description: "Conduct simulated phishing exercises to reduce phishing risks by improving employee awareness and response skills.",
      image: "/lovable-uploads/aa9aeaef-fb69-4deb-aec7-8d9cef771e6b.png",
      features: [
        "Easily generates simulated phishing campaigns that reflect real-world threats",
        "Creates tailored phishing campaigns to train employees at high risk",
        "Enables employees to be easily and regularly trained to keep ahead of emerging threats",
        "Provides contextual feedback to employees as part of the training",
        "Generates real-time metrics to allow further tailoring of simulated phishing sessions",
        "Integrates with wide-ranging anti-phishing training"
      ]
    },
    {
      title: "Managed Threat Hunting - Sniper",
      description: "Advanced threat detection and response system with AI-powered intelligence.",
      image: "/lovable-uploads/f541fbd5-93ce-4b3e-b352-37093c81affe.png",
      features: [
        "Comprehensive threat detection covering known indicators of compromise (IoCs)",
        "Automated threat triage with AI intelligence",
        "Designed for rapid scanning across environments",
        "Highly adaptable, working seamlessly with various endpoint types",
        "Provides clear, actionable reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="pt-32 pb-16 md:pb-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <RevealText className="inline-block mb-3 px-3 py-1 bg-white rounded-full text-numutech-blue text-sm font-medium">
                Our Products
              </RevealText>
              
              <RevealText delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Innovative Cybersecurity Solutions
                </h1>
              </RevealText>
              
              <RevealText delay={300}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our cutting-edge products are designed to protect your business against the ever-evolving cyber threats landscape.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {products.map((product, idx) => (
                <RevealText key={product.title} delay={idx * 100 + 400}>
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    features={product.features}
                    className="h-full"
                  />
                </RevealText>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-numutech-blue bg-opacity-5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <RevealText>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to secure your business?
                  </h2>
                </RevealText>
                
                <RevealText delay={200}>
                  <p className="text-lg text-gray-600 mb-8">
                    Contact our team to learn more about our products and how they can help protect your organization from cyber threats.
                  </p>
                </RevealText>
                
                <RevealText delay={300}>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 text-white bg-numutech-blue rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300"
                  >
                    Contact Us Today
                  </a>
                </RevealText>
              </div>
              
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-numutech-blue opacity-10 rounded-full"></div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-numutech-pink opacity-10 rounded-full"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
