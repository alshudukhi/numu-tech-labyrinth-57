
import React from 'react';
import RevealText from '@/components/ui/RevealText';
import ContactForm from '@/components/ui/ContactForm';
import { MapPin, Globe, Mail, PhoneCall } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Website",
      content: "numutech.sa",
      link: "https://numutech.sa"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info@numutech.sa",
      link: "mailto:info@numutech.sa"
    },
    {
      icon: <PhoneCall className="w-5 h-5" />,
      title: "Phone",
      content: "+966 536608090",
      link: "tel:+966536608090"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="inline-block mb-3 px-3 py-1 bg-white rounded-full text-numutech-blue text-sm font-medium">
            Contact Us
          </RevealText>
          
          <RevealText delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
          </RevealText>
          
          <RevealText delay={300}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to start your digital transformation journey? Reach out to us.
            </p>
          </RevealText>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RevealText delay={400}>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-subtle h-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h3>
              <ContactForm />
            </div>
          </RevealText>
          
          <div className="flex flex-col justify-between">
            <RevealText delay={500}>
              <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-subtle mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, idx) => (
                    <a 
                      key={idx}
                      href={item.link}
                      className="flex items-start group"
                      target={item.title === "Website" ? "_blank" : undefined}
                      rel={item.title === "Website" ? "noopener noreferrer" : undefined}
                    >
                      <div className="bg-numutech-gray bg-opacity-50 p-2 rounded-lg mr-4 text-numutech-blue group-hover:bg-numutech-blue group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-lg font-medium text-gray-900 group-hover:text-numutech-blue transition-colors duration-300">
                          {item.content}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </RevealText>
            
            <RevealText delay={600} className="hidden lg:block">
              <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-subtle relative overflow-hidden min-h-[200px]">
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Ready to transform your business?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our team of experts is ready to assist you.
                  </p>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-numutech-blue opacity-5 rounded-full"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-numutech-pink opacity-5 rounded-full"></div>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
