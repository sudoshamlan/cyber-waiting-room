
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { Check, Zap, ShieldCheck, MessageSquare, Phone, Shield } from 'lucide-react';
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
            <a href="mailto:contact@odoosense.xyz" className="text-white border border-white/20 px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Contact Us</a>
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
            title="WhatsApp Chatbot"
            description="No logins. No dashboards. Just ask. Instantly fetch invoices, sales, stock levels & more via WhatsApp."
            icon={MessageSquare}
            color="white"
            className="bg-black/50 border border-white/10 backdrop-blur-sm"
          />
          
          <FeatureCard
            title="Voice Call Assistant"
            description="Business insights, delivered over a call. Get spoken summaries of financials, sales, overdue invoices without typing."
            icon={Phone}
            color="white"
            className="bg-black/50 border border-white/10 backdrop-blur-sm"
          />
          
          <FeatureCard
            title="Secure & Personalized"
            description="Your data. Your rules. API-key-based access with end-to-end encryption & OAuth-based authentication."
            icon={Shield}
            color="white"
            className="bg-black/50 border border-white/10 backdrop-blur-sm"
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-black/70 backdrop-blur-sm max-w-4xl mx-auto py-12 px-6 rounded-xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your ERP Experience?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the waitlist today and be among the first to experience the future of business intelligence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">✔️ Zero Learning Curve</h3>
                <p className="text-gray-300">
                  Approve invoices and mark orders as fulfilled with a simple message. No complex dashboards or training required.
                </p>
              </div>
              
              <div className="border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">✔️ AI-Powered Summaries</h3>
                <p className="text-gray-300">
                  Get AI-powered summaries for quick decision-making. Navigate with voice: "Tell me more about last month's revenue."
                </p>
              </div>
              
              <div className="border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">✔️ Mobility First</h3>
                <p className="text-gray-300">
                  Access your business data anywhere, anytime via WhatsApp or phone call—perfect for on-the-go insights.
                </p>
              </div>
              
              <div className="border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">✔️ Enterprise Security</h3>
                <p className="text-gray-300">
                  Each user sees only their authorized Odoo data with real-time logs & analytics to track data requests.
                </p>
              </div>
            </div>
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
