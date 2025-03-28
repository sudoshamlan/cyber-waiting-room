
import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import WaitlistForm from './WaitlistForm';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          <span className="block mb-2 text-white">
            OdooSense
          </span>
          <TypewriterEffect 
            text="Your Business Data, One Text Away" 
            className="text-xl sm:text-2xl md:text-3xl text-white opacity-80"
          />
        </h1>
        
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Access your business intelligence through WhatsApp or voice commands. No login required, just ask the questions that matter to you.
        </p>
        
        <WaitlistForm className="mx-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
