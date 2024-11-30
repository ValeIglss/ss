import React from 'react';
import { ClipboardCheck, PackageCheck, Truck, FileCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from './layout/AnimatedSection';

export default function Process() {
  const { t, language } = useLanguage();
  
  const steps = {
    en: [
      {
        icon: <ClipboardCheck className="h-8 w-8 text-primary-gold" />,
        title: "Initial Consultation",
        description: "We assess your needs and provide detailed information about required documentation and procedures."
      },
      {
        icon: <FileCheck className="h-8 w-8 text-primary-gold" />,
        title: "Documentation",
        description: "Our team handles all necessary permits, including CITES certificates and customs documentation."
      },
      {
        icon: <PackageCheck className="h-8 w-8 text-primary-gold" />,
        title: "Preparation",
        description: "Professional packaging and preparation of trophies following international standards."
      },
      {
        icon: <Truck className="h-8 w-8 text-primary-gold" />,
        title: "Transport",
        description: "Secure transportation with full tracking and insurance coverage."
      }
    ],
    es: [
      {
        icon: <ClipboardCheck className="h-8 w-8 text-primary-gold" />,
        title: "Consulta Inicial",
        description: "Evaluamos sus necesidades y le proporcionamos información detallada sobre la documentación y los procedimientos requeridos."
      },
      {
        icon: <FileCheck className="h-8 w-8 text-primary-gold" />,
        title: "Documentación",
        description: "Nuestro equipo se encarga de todos los permisos necesarios, incluidos los certificados CITES y la documentación aduanera."
      },
      {
        icon: <PackageCheck className="h-8 w-8 text-primary-gold" />,
        title: "Preparación",
        description: "Embalaje y preparación profesional de los trofeos siguiendo los estándares internacionales."
      },
      {
        icon: <Truck className="h-8 w-8 text-primary-gold" />,
        title: "Transporte",
        description: "Transporte seguro con seguimiento completo y cobertura de seguro."
      }
    ]
  };

  const currentSteps = steps[language];

  return (
    <section id="process" className="py-16 sm:py-20 bg-primary-dark/90 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=80")',
        }}
      />
      <div className="relative section-container">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-primary-gold">{t('process.title')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-gold/30 hidden lg:block"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {currentSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-primary-dark/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-primary-gold/20 hover:border-primary-gold transition-all duration-500 group">
                    <div className="mb-6 bg-primary-gold/10 p-4 rounded-full inline-block group-hover:bg-primary-gold/20 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium mb-3 text-primary-gold">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}