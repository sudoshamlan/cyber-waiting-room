
import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import WaitlistForm from './WaitlistForm';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          <span className="block mb-2 text-gray-800">
            OdooSense
          </span>
          <TypewriterEffect 
            text="Your Business Data, One Text Away" 
            className="text-xl sm:text-2xl md:text-3xl text-sky-600"
          />
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Access your business intelligence through WhatsApp or voice commands. No login required, just ask the questions that matter to you.
        </p>
        
        <WaitlistForm className="mx-auto" />
        
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="w-full sm:w-auto animate-fade-in">
            <div className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-100">
              <span className="text-3xl font-bold text-sky-600">400+</span>
              <p className="text-gray-500 text-sm">Happy Beta Users</p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-100">
              <span className="text-3xl font-bold text-sky-600">97%</span>
              <p className="text-gray-500 text-sm">Satisfaction Rate</p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-100">
              <span className="text-3xl font-bold text-sky-600">10x</span>
              <p className="text-gray-500 text-sm">Faster Insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
