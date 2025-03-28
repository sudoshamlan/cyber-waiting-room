
import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:info@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-10 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-glow">OdooSense</h3>
            <p className="text-sm text-gray-400 mt-1">Your Business Data, One Text Away</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a 
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute -inset-2 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></span>
                  <Icon className="w-5 h-5 relative" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} OdooSense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
