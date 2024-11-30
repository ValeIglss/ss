import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLanguage('es')}
        className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm transition-all duration-300 ${
          language === 'es'
            ? 'bg-primary-dark/80 text-primary-gold border border-primary-gold/50'
            : 'text-gray-400 hover:text-primary-gold'
        }`}
      >
        <span className="text-base">🇪🇸</span>
        <span className="font-medium text-xs">ES</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary-dark/80 text-primary-gold border border-primary-gold/50'
            : 'text-gray-400 hover:text-primary-gold'
        }`}
      >
        <span className="text-base">🇬🇧</span>
        <span className="font-medium text-xs">EN</span>
      </button>
    </div>
  );
}