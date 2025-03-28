
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'purple' | 'pink' | 'blue' | 'white';
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  className = "",
}) => {
  const colorClasses = {
    purple: {
      iconBg: 'bg-cyber-purple/10',
      iconColor: 'text-cyber-purple',
      glow: 'text-glow',
    },
    pink: {
      iconBg: 'bg-cyber-pink/10',
      iconColor: 'text-cyber-pink',
      glow: 'text-glow-pink',
    },
    blue: {
      iconBg: 'bg-cyber-blue/10',
      iconColor: 'text-cyber-blue',
      glow: 'text-glow-blue',
    },
    white: {
      iconBg: 'bg-white/10',
      iconColor: 'text-white',
      glow: 'text-white',
    },
  };

  return (
    <div className={`group glass-panel p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] ${className}`}>
      <div className={`rounded-xl p-3 ${colorClasses[color].iconBg} w-12 h-12 flex items-center justify-center mb-5 group-hover:animate-pulse-glow`}>
        <Icon className={`w-6 h-6 ${colorClasses[color].iconColor}`} />
      </div>
      <h3 className={`text-xl font-bold mb-3 ${colorClasses[color].glow}`}>
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
