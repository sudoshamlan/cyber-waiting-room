
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import GlowButton from './GlowButton';

const WaitlistForm: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send this to your backend
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
        className: "glass-panel border-cyber-purple text-glow"
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md ${className}`}>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse-glow"></div>
        <div className="relative flex items-stretch glass-panel rounded-lg">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 bg-transparent border-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
          />
          <GlowButton
            type="submit"
            glowColor="pink"
            className="m-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Joining...
              </span>
            ) : (
              "Join Now"
            )}
          </GlowButton>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">Join our waitlist to get early access to OdooSense</p>
    </form>
  );
};

export default WaitlistForm;
