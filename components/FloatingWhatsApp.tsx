import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const message = encodeURIComponent("Olá! Gostaria de agendar um horário.");
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-brand-green text-white rounded-full shadow-lg hover:bg-brand-greenDark transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};