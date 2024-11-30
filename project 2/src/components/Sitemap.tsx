import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const logoFilter = 'brightness(0) saturate(100%) invert(63%) sepia(14%) saturate(1111%) hue-rotate(356deg) brightness(94%) contrast(86%)';

export default function Sitemap() {
  const { t, language } = useLanguage();

  const links = {
    en: {
      services: ['Trophy Import', 'Trophy Export', 'Documentation'],
      contact: {
        phone: '+34 648 53 44 36',
        email: 'operations@importhunt.es'
      }
    },
    es: {
      services: ['Importación de Trofeos', 'Exportación de Trofeos', 'Documentación'],
      contact: {
        phone: '+34 648 53 44 36',
        email: 'operations@importhunt.es'
      }
    }
  };

  const currentLinks = links[language];

  return (
    <footer className="bg-primary-dark/95 text-white border-t border-primary-gold/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-primary-gold mb-3">Services</h3>
            <ul className="space-y-2">
              {currentLinks.services.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors text-xs">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-medium text-primary-gold mb-3">{t('contact.title')}</h3>
            <ul className="space-y-2">
              {[
                [Phone, currentLinks.contact.phone],
                [Mail, currentLinks.contact.email]
              ].map(([Icon, text], index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Icon className="h-3 w-3 text-primary-gold" />
                  <span className="text-gray-400 text-xs break-all">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-primary-gold/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://i.postimg.cc/JtL7YJdj/Logo-camel-sin-texto-ni-fondo.png" 
                alt="ImportHunt Mascot" 
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                style={{ filter: logoFilter }}
              />
              <img 
                src="https://i.postimg.cc/GtR6ZQd3/Logo-camel-sin-fondo-copy.png" 
                alt="ImportHunt" 
                className="h-4 sm:h-5 object-contain"
                style={{ filter: logoFilter }}
              />
            </div>
            <p className="text-gray-500 text-[10px] sm:text-xs text-center sm:text-right">
              © {new Date().getFullYear()} ImportHunt. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}