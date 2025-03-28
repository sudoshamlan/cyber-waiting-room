
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import WaitlistForm from '@/components/WaitlistForm';
import GlowButton from '@/components/GlowButton';
import { MessageSquare, Phone, Bell } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <BackgroundPaths title="OdooSense" />
      </div>
      
      {/* Navigation */}
      <header className="py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">OdooSense</div>
            <GlowButton variant="ghost" size="sm" glowColor="blue" className="text-gray-800">Contact Us</GlowButton>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>
      
      {/* Features Section */}
      <section className="py-20 container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            OdooSense connects your Odoo platform to modern communication channels, bringing your data where you need it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="WhatsApp Integration"
            description="Your ERP, just a text away. Get reports, insights, and alerts directly in your messaging app."
            icon={MessageSquare}
            color="blue"
            className="animate-fade-in"
          />
          
          <FeatureCard
            title="Voice Assistant"
            description="Call for instant insights, no login needed. Perfect for executives on the go."
            icon={Phone}
            color="blue"
            className="animate-fade-in delay-200"
          />
          
          <FeatureCard
            title="Smart Alerts"
            description="Get notified before problems arise with AI-powered anomaly detection and trend analysis."
            icon={Bell}
            color="blue"
            className="animate-fade-in delay-400"
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-sky-50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg max-w-3xl mx-auto py-12 px-6 rounded-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Transform Your ERP Experience?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join the waitlist today and be among the first to experience the future of business intelligence.
            </p>
            
            <WaitlistForm className="mx-auto" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
