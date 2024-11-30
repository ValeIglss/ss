import React, { useState, useEffect } from 'react';
import { Menu, Trophy, FileCheck, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { scrollToSection } from '../utils/scroll';
import Logo from './layout/Logo';

interface NavbarProps {
  onSectionChange: (section: string) => void;
  activeSection: string | null;
}

export default function Navbar({ onSectionChange, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'services', icon: <Trophy className="h-5 w-5" />, label: t('nav.services') },
    { id: 'process', icon: <FileCheck className="h-5 w-5" />, label: t('process') },
    { id: 'tracking', icon: <Activity className="h-5 w-5" />, label: t('tracking') }
  ];

  const handleNavigation = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
    scrollToSection(id);
  };

  const getNavbarStyle = () => {
    const baseStyle = 'fixed w-full z-50 transition-all duration-300';
    const bgOpacity = Math.min(0.95, Math.max(0.6, scrollPosition / 500));
    
    if (isOpen) {
      return `${baseStyle} bg-primary-dark/95 backdrop-blur-sm shadow-lg`;
    }
    
    return `${baseStyle} bg-primary-dark/[${bgOpacity}] backdrop-blur-sm ${
      scrollPosition > 20 ? 'shadow-lg' : ''
    }`;
  };

  return (
    <nav className={getNavbarStyle()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo size="small" />
          
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`text-white transition-all duration-300 px-4 py-2 rounded-lg flex items-center gap-2 ${
                  isOpen ? 'bg-primary-gold/20 text-primary-gold' : 'hover:bg-primary-gold/10 hover:text-primary-gold'
                }`}
              >
                <Menu className="h-5 w-5" />
                <span className="text-sm font-medium">Menu</span>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-primary-dark/95 backdrop-blur-sm border border-primary-gold/20 rounded-lg overflow-hidden shadow-xl">
                  <div className="py-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className={`w-full text-left px-4 py-3 transition-all duration-300 flex items-center space-x-4 group ${
                          activeSection === item.id 
                            ? 'bg-primary-gold/20 text-primary-gold' 
                            : 'text-white hover:bg-primary-gold/10 hover:text-primary-gold'
                        }`}
                      >
                        <span className="transform transition-all duration-300 group-hover:scale-110">
                          {item.icon}
                        </span>
                        <span className="text-sm font-medium transform transition-transform duration-300 group-hover:translate-x-2">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}