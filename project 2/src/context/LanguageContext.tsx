import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'process': 'Process',
    'tracking': 'Tracking',
    'hero.slogan': 'You hunt, we bring it home',
    'hero.subtitle': 'Professional handling of hunting trophies with worldwide experience',
    'hero.discover': 'Our Services',
    'hero.contact': 'Get in Touch',
    'services.title': 'Our Services',
    'services.subtitle': 'Dedicated expertise in handling hunting trophies with care and precision',
    'services.exceptional': 'What We Offer',
    'services.request': 'Start Your Journey',
    'process.title': 'How It Works',
    'process.subtitle': 'A straightforward approach ensuring your trophies receive the care they deserve',
    'tracking.title': 'Track Your Trophy',
    'contact.title': 'Contact',
    'contact.getInTouch': 'Get in Touch',
    'contact.description': 'We\'re here to assist you with all your trophy import and export needs. Contact us for professional service.',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'footer.rights': 'All rights reserved.'
  },
  es: {
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'process': 'Proceso',
    'tracking': 'Seguimiento',
    'hero.slogan': 'Tú cazas, nosotros te lo traemos',
    'hero.subtitle': 'Gestión profesional de trofeos de caza con experiencia internacional',
    'hero.discover': 'Nuestros Servicios',
    'hero.contact': 'Contáctanos',
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Experiencia dedicada en el manejo de trofeos de caza con cuidado y precisión',
    'services.exceptional': 'Nuestros Servicios',
    'services.request': 'Comienza Tu Viaje',
    'process.title': 'Nuestro Proceso',
    'process.subtitle': 'Un proceso claro que asegura el mejor cuidado para tus trofeos',
    'tracking.title': 'Seguimiento',
    'contact.title': 'Contacto',
    'contact.getInTouch': 'Contáctanos',
    'contact.description': 'Estamos aquí para ayudarte con todas tus necesidades de importación y exportación de trofeos. Contáctanos para un servicio profesional.',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Tu Mensaje',
    'contact.send': 'Enviar Mensaje',
    'footer.rights': 'Todos los derechos reservados.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}