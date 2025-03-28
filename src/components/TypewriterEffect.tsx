
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  className?: string;
  delay?: number;
  typingSpeed?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  text, 
  className = "", 
  delay = 1000,
  typingSpeed = 100
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTyping, text, typingSpeed]);

  return (
    <div className={`relative ${className}`}>
      <span className="relative">{displayText}</span>
      {isTyping && currentIndex < text.length && (
        <span className="absolute right-[-4px] top-0 border-r-2 border-white h-full animate-blink" />
      )}
    </div>
  );
};

export default TypewriterEffect;
