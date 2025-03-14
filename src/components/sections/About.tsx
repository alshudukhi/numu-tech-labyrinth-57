
import React from 'react';
import RevealText from '@/components/ui/RevealText';
import { EyeIcon, Target } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <RevealText className="mb-3 inline-block px-3 py-1 bg-numutech-gray rounded-full text-numutech-blue text-sm font-medium">
              About Numu Tech
            </RevealText>
            
            <RevealText delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Trusted Partner in Digital Transformation
              </h2>
            </RevealText>
            
            <RevealText delay={300}>
              <p className="text-gray-600 mb-6">
                We Numu Tech, your trusted and reliable partner in the world of Digital Transformation. We bring expertise and innovation together to elevate your business in the dynamic landscape of technology. Join us in the journey towards innovation, security and success.
              </p>
            </RevealText>
            
            <div className="mt-8 space-y-6">
              <RevealText 
                delay={400}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle"
              >
                <div className="flex items-start">
                  <div className="bg-numutech-gray bg-opacity-50 p-2 rounded-lg mr-4">
                    <EyeIcon className="w-6 h-6 text-numutech-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Vision
                    </h3>
                    <p className="text-gray-600">
                      To be the vanguard of technological empowerment, safeguarding the digital realm while pioneering innovations that reshape industries and inspire a secure, connected future.
                    </p>
                  </div>
                </div>
              </RevealText>
              
              <RevealText 
                delay={500}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-subtle"
              >
                <div className="flex items-start">
                  <div className="bg-numutech-gray bg-opacity-50 p-2 rounded-lg mr-4">
                    <Target className="w-6 h-6 text-numutech-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Mission
                    </h3>
                    <p className="text-gray-600">
                      To provide unparalleled new technical solutions that fortify business through relentless dedication, expertise and a commitment to excellence, we strive to equip organizations with the tools and wisdom they need to thrive in a rapidly changing technological landscape.
                    </p>
                  </div>
                </div>
              </RevealText>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-numutech-blue/5 to-numutech-pink/5 rounded-xl transform -rotate-3"></div>
            <div className="relative bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-subtle z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="aspect-video bg-numutech-gray rounded-lg animate-float" style={{ animationDelay: "0ms" }}></div>
                  <div className="aspect-square bg-numutech-gray rounded-lg animate-float" style={{ animationDelay: "500ms" }}></div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square bg-numutech-gray rounded-lg animate-float" style={{ animationDelay: "1000ms" }}></div>
                  <div className="aspect-video bg-numutech-gray rounded-lg animate-float" style={{ animationDelay: "1500ms" }}></div>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="h-2.5 bg-numutech-gray rounded-full"></div>
                <div className="h-2.5 bg-numutech-gray rounded-full w-5/6"></div>
                <div className="h-2.5 bg-numutech-gray rounded-full w-4/6"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-numutech-blue opacity-10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
