
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import WaitlistForm from '@/components/WaitlistForm';
import GlowButton from '@/components/GlowButton';
import { MessageSquare, Phone, Bell } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-deep-blue relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-glow">OdooSense</div>
            <GlowButton variant="ghost" size="sm">Contact Us</GlowButton>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Powerful Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            OdooSense connects your Odoo platform to modern communication channels, bringing your data where you need it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="WhatsApp Integration"
            description="Your ERP, just a text away. Get reports, insights, and alerts directly in your messaging app."
            icon={MessageSquare}
            color="purple"
            className="animate-slide-in-left"
          />
          
          <FeatureCard
            title="Voice Assistant"
            description="Call for instant insights, no login needed. Perfect for executives on the go."
            icon={Phone}
            color="pink"
            className="animate-slide-in-left delay-200"
          />
          
          <FeatureCard
            title="Smart Alerts"
            description="Get notified before problems arise with AI-powered anomaly detection and trend analysis."
            icon={Bell}
            color="blue"
            className="animate-slide-in-left delay-400"
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-black to-cyber-deep-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-panel max-w-3xl mx-auto py-12 px-6 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">Ready to Transform Your ERP Experience?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Join the waitlist today and be among the first to experience the future of business intelligence.
            </p>
            
            <WaitlistForm className="mx-auto" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
