
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RevealText from '@/components/ui/RevealText';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Shield, Server, BrainCircuit, GraduationCap, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const serviceCategories = [
  {
    id: "cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    title: "Cybersecurity Solutions",
    description: "Covering all Cyber Security domains from prevention, detection, response to investigation.",
    subservices: [
      {
        title: "Threat Intelligence",
        description: "Stay ahead of cybercriminals with actionable intelligence on emerging threats and vulnerabilities. Leverage global insights to fortify your defenses and make informed security decisions."
      },
      {
        title: "Threat Hunting",
        description: "Proactively search for hidden threats within your environment before they cause harm. This hands-on approach identifies advanced attacks that evade traditional security tools."
      },
      {
        title: "Compromise Assessment",
        description: "Determine if your organization has been breached or is currently compromised. A detailed analysis identifies malicious activity and provides a clear path to remediation."
      },
      {
        title: "Security Awareness and Training",
        description: "Educate employees on recognizing and avoiding cyber threats with interactive training programs. Empower your team to be the first line of defense against phishing, malware, and other attacks."
      },
      {
        title: "Cybersecurity Consultation",
        description: "We help you assess your unique cybersecurity needs and challenges. Our experts will help you craft a customized strategy to enhance your security posture."
      }
    ]
  },
  {
    id: "it-solutions",
    icon: <Server className="w-6 h-6" />,
    title: "IT Solutions",
    description: "A range of activities and solutions that involve the use, management, and support of technology to meet the needs of individuals, businesses, and organizations.",
    subservices: [
      {
        title: "Low Current Systems",
        description: "Our expertise encompasses technologies that optimize your workspace including Access control system, Public address systems, CCTV, systems, Smart management systems, FAS systems, BMS & HAS."
      },
      {
        title: "Digital Transformation",
        description: "We offer the best of NG technologies coupled with our dedicated team of delivery and project management professionals."
      },
      {
        title: "Server Management",
        description: "We help you manage your server's daily operations; guarantee updating your systems, support your data and perform perfectly with the server management service."
      },
      {
        title: "Enterprise Apps",
        description: "Full solutions for enterprise applications covering Unified Communication, BI, IoT, ICT Infrastructure and Financial tools."
      },
      {
        title: "Software Development",
        description: "Turn your ideas into reality with custom web & mobile Applications, seamless interfaces, and agile development techniques."
      }
    ]
  },
  {
    id: "ai-solutions",
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Artificial Intelligence Solutions",
    description: "AI development services have the potential to transform businesses across various industries by improving efficiency, decision-making, and customer experiences.",
    subservices: [
      {
        title: "Process Automation",
        description: "Robotic Process Automation (RPA) powered by AI can automate repetitive, rule-based tasks, reducing errors and freeing up employees for more creative and strategic work."
      },
      {
        title: "Quality Control",
        description: "AI can be used for quality control in manufacturing, ensuring that products meet specific standards and reducing defects and waste."
      },
      {
        title: "Smart Manufacturing",
        description: "AI-driven automation and predictive maintenance can improve efficiency and reduce downtime in manufacturing."
      },
      {
        title: "Natural Language Processing",
        description: "Businesses can use NLP to analyze customer reviews, social media sentiment, and other unstructured text data to gain insights into customer opinions and preferences."
      },
      {
        title: "Customer Service Chatbots",
        description: "Implementing AI chatbots on websites and customer service platforms can provide instant responses to customer queries, improving response times and customer satisfaction."
      },
      {
        title: "ML Algorithms",
        description: "We harness the power of AI to innovate and build Products and Solutions for the advancement of digital humanity. Through ML algorithms, our clients evolve the way they work and make the most of their data."
      }
    ]
  },
  {
    id: "training",
    icon: <GraduationCap className="w-6 h-6" />,
    title: "IT Training and Consultations",
    description: "Our interest in IT domain enable and motivate us to bring an unique approach to our services.",
    subservices: [
      {
        title: "Consultations",
        description: "We provide advisory services that help companies assess different technology strategies and align their technology strategies with their business or process strategies."
      },
      {
        title: "Advanced Training",
        description: "We offer on-site training and On-line training to the professionals & freshers which incorporated with Expert & Experienced Instructors."
      },
      {
        title: "Corporate Training",
        description: "We provide a flexible, cost-effective option that allows the corporates to train as many or as few employees as you need, from a single team or department to everyone in your organization."
      },
      {
        title: "Hybrid Training",
        description: "We provide to professionals the flexibility to learn at their own time and location, even from their mobile devices."
      },
      {
        title: "Industry Expert Trainers",
        description: "Quality training provided by well experienced trainers across all business functions and technologies."
      }
    ]
  },
  {
    id: "data-analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Analytics Solutions",
    description: "Due to the world's changes, Data analytics solutions have become the leading industry in business today.",
    subservices: [
      {
        title: "Descriptive Analysis",
        description: "We help you with your data to understand your business needs."
      },
      {
        title: "Predictive Analysis",
        description: "We help you with your data to predict your business future by analyzing past customers behavior."
      },
      {
        title: "Marketing Analysis",
        description: "We can help you by offering milestones for your business to obtain more profit effectively and efficiently."
      },
      {
        title: "Customer Analysis",
        description: "We can help with understanding your customers behavior to make the best decision."
      },
      {
        title: "Data Visualization and Dashboard",
        description: "We help you to understand your data by conducting a significance of data in visual context."
      }
    ]
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setExpandedService(id);
        }
      }, 100);
    }
  }, [location]);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="pt-32 pb-16 md:pb-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <RevealText className="inline-block mb-3 px-3 py-1 bg-white rounded-full text-numutech-blue text-sm font-medium">
                Our Services
              </RevealText>
              
              <RevealText delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Comprehensive Digital Solutions
                </h1>
              </RevealText>
              
              <RevealText delay={300}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our range of services designed to elevate your business in the dynamic landscape of technology.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {serviceCategories.map((service, idx) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <RevealText delay={idx * 100} className="bg-white rounded-xl border border-gray-100 shadow-subtle overflow-hidden">
                    <div 
                      className="p-6 md:p-8 cursor-pointer"
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="bg-numutech-gray bg-opacity-50 p-3 rounded-lg mr-4 text-numutech-blue">
                            {service.icon}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                              {service.title}
                            </h2>
                            <p className="text-gray-600 max-w-3xl">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {expandedService === service.id ? (
                            <ChevronUp className="w-6 h-6 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-500" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {expandedService === service.id && (
                      <div className="px-6 md:px-8 pb-8 border-t border-gray-100 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">
                          How can we help you?
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {service.subservices.map((subservice, subIdx) => (
                            <AnimatedCard 
                              key={subIdx}
                              className="bg-numutech-gray bg-opacity-30 p-5 rounded-lg"
                            >
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                {subservice.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {subservice.description}
                              </p>
                            </AnimatedCard>
                          ))}
                        </div>
                      </div>
                    )}
                  </RevealText>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <RevealText>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to elevate your business?
                </h2>
              </RevealText>
              
              <RevealText delay={200}>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Contact us today to discuss how our services can transform your organization.
                </p>
              </RevealText>
              
              <RevealText delay={300}>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 text-white bg-numutech-blue rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </RevealText>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
