import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  onClick?: () => void;
  href?: string;
  whatsappMessage?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  whatsappMessage,
  className = '',
  size = 'md',
  fullWidth = false
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-brand-green text-white hover:bg-brand-greenDark shadow-sm hover:shadow-md",
    secondary: "bg-brand-brown text-white hover:bg-opacity-90 shadow-sm",
    outline: "border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white",
    text: "text-brand-brown hover:text-brand-green underline-offset-4 hover:underline bg-transparent px-0",
  };

  const combinedClasses = `
    ${baseClasses} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${fullWidth ? 'w-full' : ''} 
    ${className}
  `;

  if (whatsappMessage) {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    return (
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};