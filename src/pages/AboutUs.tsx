
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RevealText from '@/components/ui/RevealText';
import { EyeIcon, Target, Award, Users, Shield, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "We prioritize security in everything we do, ensuring our clients' data and systems are protected."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming trusted partners in their success."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in all our solutions, delivering the highest quality in every project."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Innovation",
      description: "We continuously innovate to keep our clients at the forefront of technological advancement."
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
                About Us
              </RevealText>
              
              <RevealText delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  We are Numu Tech
                </h1>
              </RevealText>
              
              <RevealText delay={300}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Your trusted and reliable partner in the world of Digital Transformation. We bring expertise and innovation together to elevate your business in the dynamic landscape of technology.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <RevealText delay={400} className="bg-white p-8 rounded-xl border border-gray-100 shadow-subtle">
                <div className="flex items-center mb-6">
                  <div className="bg-numutech-gray bg-opacity-50 p-3 rounded-lg mr-4">
                    <EyeIcon className="w-8 h-8 text-numutech-blue" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the vanguard of technological empowerment, safeguarding the digital realm while pioneering innovations that reshape industries and inspire a secure, connected future.
                </p>
              </RevealText>
              
              <RevealText delay={500} className="bg-white p-8 rounded-xl border border-gray-100 shadow-subtle">
                <div className="flex items-center mb-6">
                  <div className="bg-numutech-gray bg-opacity-50 p-3 rounded-lg mr-4">
                    <Target className="w-8 h-8 text-numutech-blue" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide unparalleled new technical solutions that fortify business through relentless dedication, expertise and a commitment to excellence, we strive to equip organizations with the tools and wisdom they need to thrive in a rapidly changing technological landscape.
                </p>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <RevealText className="inline-block mb-3 px-3 py-1 bg-white rounded-full text-numutech-blue text-sm font-medium">
                Our Values
              </RevealText>
              
              <RevealText delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Drives Us
                </h2>
              </RevealText>
              
              <RevealText delay={300}>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our core values define who we are and guide how we work with our clients.
                </p>
              </RevealText>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <RevealText key={value.title} delay={idx * 100 + 400}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle h-full">
                    <div className="bg-numutech-gray bg-opacity-50 p-3 w-12 h-12 rounded-lg flex items-center justify-center text-numutech-blue mb-5">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-numutech-blue bg-opacity-5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <RevealText>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Join us in the journey towards innovation, security and success
                  </h2>
                </RevealText>
                
                <RevealText delay={200}>
                  <p className="text-lg text-gray-600 mb-8">
                    Partner with Numu Tech and transform your business with cutting-edge technology solutions that drive growth and success.
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

export default AboutUs;
