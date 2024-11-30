import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollIndicator from './ScrollIndicator';
import { scrollToSection } from '../utils/scroll';
import Logo from './layout/Logo';

interface HeroProps {
  onSectionChange?: (section: string) => void;
}

export default function Hero({ onSectionChange }: HeroProps) {
  const { t } = useLanguage();

  const handleNavigation = (section: string) => {
    if (onSectionChange) {
      onSectionChange(section);
    }
    scrollToSection(section);
  };

  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000 scale-105 hover:scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/80 to-primary-dark/70" />
      </div>
      
      <div className="relative min-h-[100svh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-16 md:py-0 w-full">
          <div className="flex flex-col items-center sm:items-start mt-12 sm:mt-20">
            <div className="mb-8 sm:mb-10 animate-fade-in relative">
              <Logo size="large" />
            </div>

            <div className="text-center sm:text-left max-w-3xl mx-auto sm:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 text-primary-gold animate-slide-up leading-tight">
                {t('hero.slogan')}
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-200 animate-fade-in-delay leading-relaxed font-light">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2 sm:justify-start justify-center">
                <button 
                  onClick={() => handleNavigation('services')}
                  className="luxury-border rounded-xl group overflow-hidden transform hover:scale-105 transition-all duration-500"
                >
                  <span className="bg-primary-dark text-primary-gold px-8 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 hover:bg-primary-gold hover:text-primary-dark font-medium text-base sm:text-lg">
                    {t('hero.discover')}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="luxury-border rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                >
                  <span className="bg-primary-dark text-primary-gold px-8 sm:px-10 py-4 sm:py-5 rounded-xl flex items-center justify-center transition-all duration-500 hover:bg-primary-gold hover:text-primary-dark font-medium text-base sm:text-lg">
                    {t('hero.contact')}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </div>
  );
}