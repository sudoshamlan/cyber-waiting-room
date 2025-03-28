
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const WaitlistForm: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert the email into Supabase
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);
      
      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation - email already exists
          toast({
            title: "Already Registered",
            description: "This email is already on our waitlist. Thank you for your enthusiasm!",
            variant: "default"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll be in touch soon!",
          variant: "default"
        });
      }
      
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to add you to the waitlist. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md ${className}`}>
      <div className="relative flex items-center bg-white rounded-lg overflow-hidden">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="flex-1 px-4 py-3 bg-white text-black border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors disabled:opacity-75"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Join Now'}
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">Join our waitlist to get early access to OdooSense</p>
    </form>
  );
};

export default WaitlistForm;
