
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { Check, Zap, ShieldCheck } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <BackgroundPaths title="OdooSense" />
      </div>
      
      {/* Navigation */}
      <header className="py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">OdooSense</div>
            <button className="text-white border border-white/20 px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Contact Us</button>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            OdooSense connects your Odoo platform to modern communication channels, bringing your data where you need it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="99.9% Accuracy"
            description="Advanced AI algorithms ensure precise data analysis and reporting for your business decisions."
            icon={Check}
            color="white"
            className="bg-black/50 border border-white/10 backdrop-blur-sm"
          />
          
          <FeatureCard
            title="Effortless Operation"
            description="Intuitive interface that requires minimal training, saving time and reducing operational friction."
            icon={Zap}
            color="white"
            className="bg-black/50 border border-white/10 backdrop-blur-sm"
          />
          
          <FeatureCard
            title="Enterprise Security"
            description="Bank-level encryption and security protocols to keep your sensitive business data protected."
            icon={ShieldCheck}
            color="white"
            className="bg-black/50 border border-white/10 backdrop-blur-sm"
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-black/70 backdrop-blur-sm max-w-3xl mx-auto py-12 px-6 rounded-xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your ERP Experience?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Join the waitlist today and be among the first to experience the future of business intelligence.
            </p>
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
