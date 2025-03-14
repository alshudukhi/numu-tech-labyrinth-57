
import React from 'react';
import { Shield, Server, BrainCircuit, GraduationCap, BarChart3 } from 'lucide-react';
import RevealText from '@/components/ui/RevealText';
import ServiceCard from '@/components/ui/ServiceCard';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Shield size={24} />,
    title: 'Cybersecurity Solutions',
    description: 'Covering all Cyber Security domains from prevention, detection, response to investigation.',
    path: '/services#cybersecurity'
  },
  {
    icon: <Server size={24} />,
    title: 'IT Solutions',
    description: 'Comprehensive technology solutions for businesses, from software and hardware to networking.',
    path: '/services#it-solutions'
  },
  {
    icon: <BrainCircuit size={24} />,
    title: 'Artificial Intelligence Solutions',
    description: 'AI development services transforming businesses through automation and intelligence.',
    path: '/services#ai-solutions'
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'IT Training and Consultations',
    description: 'Expert-led training and consultation services for professionals and enterprises.',
    path: '/services#training'
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Data Analytics Solutions',
    description: 'Complete data analysis solutions to help understand and leverage your business data.',
    path: '/services#data-analytics'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="inline-block mb-3 px-3 py-1 bg-white rounded-full text-numutech-blue text-sm font-medium">
            Our Services
          </RevealText>
          
          <RevealText delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
          </RevealText>
          
          <RevealText delay={300}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring expertise and innovation together to elevate your business in the world of technology.
            </p>
          </RevealText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <RevealText key={service.title} delay={idx * 100 + 400}>
              <Link to={service.path} className="block h-full">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  className="h-full transition-all duration-300 hover:shadow-md"
                />
              </Link>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
