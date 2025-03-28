
import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import WaitlistForm from './WaitlistForm';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Radial gradient for hero background */}
      <div className="absolute w-full h-full max-w-[800px] bg-cyber-radial top-0 left-1/2 transform -translate-x-1/2 z-[-1]"></div>
      
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          <span className="block mb-2 glitch" data-text="OdooSense">
            OdooSense
          </span>
          <TypewriterEffect 
            text="Your Business Data, One Text Away" 
            className="text-xl sm:text-2xl md:text-3xl text-glow-blue"
          />
        </h1>
        
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Access your business intelligence through WhatsApp or voice commands. No login required, just ask the questions that matter to you.
        </p>
        
        <WaitlistForm className="mx-auto" />
        
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="w-full sm:w-auto animate-float">
            <div className="glass-panel p-4 text-center">
              <span className="text-3xl font-bold text-glow">400+</span>
              <p className="text-gray-400 text-sm">Happy Beta Users</p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel p-4 text-center">
              <span className="text-3xl font-bold text-glow-pink">97%</span>
              <p className="text-gray-400 text-sm">Satisfaction Rate</p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="glass-panel p-4 text-center">
              <span className="text-3xl font-bold text-glow-blue">10x</span>
              <p className="text-gray-400 text-sm">Faster Insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
