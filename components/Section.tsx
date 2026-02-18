import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: 'beige' | 'nude' | 'white';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  bgColor = 'beige',
  containerSize = 'lg'
}) => {
  const bgClasses = {
    beige: 'bg-brand-beige',
    nude: 'bg-brand-nude',
    white: 'bg-white'
  };

  const containerClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[bgColor]} ${className}`}>
      <div className={`mx-auto px-6 ${containerClasses[containerSize]}`}>
        {children}
      </div>
    </section>
  );
};