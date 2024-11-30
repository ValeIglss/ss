import React, { useRef, useEffect } from 'react';
import { Trophy, FileCheck, Activity } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useMenuAnimation } from '../../utils/hooks/useMenuAnimation';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string | null;
  onNavigate: (id: string) => void;
}

export default function MobileMenu({ isOpen, activeSection, onNavigate }: MobileMenuProps) {
  const { t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const { isAnimating, shouldRender, startAnimation, endAnimation } = useMenuAnimation();

  useEffect(() => {
    if (isOpen) {
      startAnimation();
    } else {
      endAnimation();
    }
  }, [isOpen]);

  const menuItems = [
    { id: 'services', icon: <Trophy className="h-5 w-5" />, label: t('nav.services') },
    { id: 'process', icon: <FileCheck className="h-5 w-5" />, label: t('process') },
    { id: 'tracking', icon: <Activity className="h-5 w-5" />, label: t('tracking') }
  ];

  if (!isAnimating && !shouldRender) return null;

  return (
    <div 
      ref={menuRef}
      className={`absolute right-4 top-full mt-2 w-56 transform transition-all duration-300 ease-out ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 100 }}
    >
      <div className="bg-primary-dark/95 backdrop-blur-md border border-primary-gold/20 rounded-lg overflow-hidden shadow-xl">
        <div className="py-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
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
    </div>
  );
}