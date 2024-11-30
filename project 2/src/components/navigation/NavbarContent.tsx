import React from 'react';
import { useScrollPosition } from '../../utils/hooks/useScrollPosition';
import Logo from '../layout/Logo';
import LanguageToggle from '../LanguageToggle';

interface NavbarContentProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export default function NavbarContent({ onMenuClick, isMenuOpen }: NavbarContentProps) {
  const { scrollPosition } = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-primary-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo size="small" />
          
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <div className="relative">
              <button 
                onClick={onMenuClick}
                className={`text-white transition-all duration-300 px-4 py-2 rounded-lg flex items-center gap-2 transform hover:scale-102 ${
                  isMenuOpen ? 'bg-primary-gold/20 text-primary-gold' : 'hover:bg-primary-gold/10 hover:text-primary-gold'
                }`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <span className="text-sm font-medium">Menu</span>
                <div className="w-4 h-4 relative">
                  <span className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  } w-full h-0.5 bg-current rounded-full`} />
                  <span className={`absolute inset-0 transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  } w-full h-0.5 bg-current rounded-full translate-y-[0.7rem]`} />
                  <span className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 translate-y-1.5' : 'translate-y-[1.4rem]'
                  } w-full h-0.5 bg-current rounded-full`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}