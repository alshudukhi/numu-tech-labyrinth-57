
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RevealText from '@/components/ui/RevealText';
import { PhoneCall, Mail, Globe, MapPin } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      value: "numutech.sa",
      href: "https://numutech.sa"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@numutech.sa",
      href: "mailto:info@numutech.sa"
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Phone",
      value: "+966 536608090",
      href: "tel:+966536608090"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "Riyadh, Saudi Arabia",
      href: "#"
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
                Contact Us
              </RevealText>
              
              <RevealText delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h1>
              </RevealText>
              
              <RevealText delay={300}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We're here to help you with any questions about our services and products. Reach out to us using any of the methods below.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <RevealText>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    Contact Information
                  </h2>
                </RevealText>
                
                <div className="space-y-6">
                  {contactInfo.map((item, idx) => (
                    <RevealText key={item.title} delay={idx * 100 + 200}>
                      <a 
                        href={item.href}
                        className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        target={item.title === "Website" ? "_blank" : undefined}
                        rel={item.title === "Website" ? "noopener noreferrer" : undefined}
                      >
                        <div className="bg-numutech-gray bg-opacity-50 p-3 rounded-lg mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.value}</p>
                        </div>
                      </a>
                    </RevealText>
                  ))}
                </div>
              </div>
              
              <div>
                <RevealText>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    Send Us a Message
                  </h2>
                </RevealText>
                
                <RevealText delay={200}>
                  <ContactForm />
                </RevealText>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <RevealText>
              <div className="rounded-xl overflow-hidden h-96 shadow-subtle">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6747739866255!2d46.6400247!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwMzgnMjQuMSJF!5e0!3m2!1sen!2s!4v1620287999999!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title="Numu Tech Location"
                ></iframe>
              </div>
            </RevealText>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
