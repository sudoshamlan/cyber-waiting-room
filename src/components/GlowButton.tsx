
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  glowColor?: 'purple' | 'pink' | 'blue' | 'orange';
}

const GlowButton: React.FC<GlowButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  glowColor = 'purple',
  children,
  ...props
}) => {
  const baseStyles = "relative font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg"
  };
  
  const glowStyles = {
    purple: "hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] focus:ring-cyber-purple/50",
    pink: "hover:shadow-[0_0_15px_rgba(217,70,239,0.8)] focus:ring-cyber-pink/50",
    blue: "hover:shadow-[0_0_15px_rgba(30,174,219,0.8)] focus:ring-cyber-blue/50",
    orange: "hover:shadow-[0_0_15px_rgba(249,115,22,0.8)] focus:ring-cyber-orange/50"
  };
  
  const variantStyles = {
    default: {
      purple: "bg-cyber-purple text-white hover:bg-cyber-purple/90",
      pink: "bg-cyber-pink text-white hover:bg-cyber-pink/90",
      blue: "bg-cyber-blue text-white hover:bg-cyber-blue/90",
      orange: "bg-cyber-orange text-white hover:bg-cyber-orange/90"
    },
    outline: {
      purple: "bg-transparent text-cyber-purple border border-cyber-purple hover:bg-cyber-purple/10",
      pink: "bg-transparent text-cyber-pink border border-cyber-pink hover:bg-cyber-pink/10",
      blue: "bg-transparent text-cyber-blue border border-cyber-blue hover:bg-cyber-blue/10",
      orange: "bg-transparent text-cyber-orange border border-cyber-orange hover:bg-cyber-orange/10"
    },
    ghost: {
      purple: "bg-transparent text-cyber-purple hover:bg-cyber-purple/10",
      pink: "bg-transparent text-cyber-pink hover:bg-cyber-pink/10",
      blue: "bg-transparent text-cyber-blue hover:bg-cyber-blue/10",
      orange: "bg-transparent text-cyber-orange hover:bg-cyber-orange/10"
    }
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        glowStyles[glowColor],
        variantStyles[variant][glowColor],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlowButton;
