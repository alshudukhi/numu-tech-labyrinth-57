
import React from 'react';
import RevealText from '@/components/ui/RevealText';
import ProductCard from '@/components/ui/ProductCard';

const Products = () => {
  const products = [
    {
      title: "Rashed Tool",
      description: "A comprehensive solution to reduce phishing risks by improving employee awareness and response skills through simulated phishing exercises.",
      features: [
        "Easily generates simulated phishing campaigns that reflect real world threats",
        "Creates tailored phishing campaigns for high-risk threats",
        "Provides contextual feedback as part of the training",
        "Generates real-time metrics to improve effectiveness"
      ],
      image: "/lovable-uploads/aa9aeaef-fb69-4deb-aec7-8d9cef771e6b.png"
    },
    {
      title: "Sniper",
      description: "Advanced threat detection and hunting solution providing comprehensive security monitoring for your organization.",
      features: [
        "Comprehensive threat detection covering known indicators of compromise",
        "Automated threat triage with AI intelligence",
        "Designed for rapid scanning across environments",
        "Detailed and actionable reporting"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="inline-block mb-3 px-3 py-1 bg-numutech-gray rounded-full text-numutech-blue text-sm font-medium">
            Our Products
          </RevealText>
          
          <RevealText delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Security Solutions
            </h2>
          </RevealText>
          
          <RevealText delay={300}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our innovative products designed to protect and enhance your digital environment.
            </p>
          </RevealText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <RevealText key={product.title} delay={idx * 200 + 400}>
              <ProductCard
                title={product.title}
                description={product.description}
                features={product.features}
                image={product.image}
              />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
