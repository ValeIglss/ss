import React from 'react';
import { Trophy, FileCheck, Scale, Plane, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from './layout/AnimatedSection';

export default function Services() {
  const { t, language } = useLanguage();

  const services = {
    en: [
      {
        icon: <Trophy className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Trophy Handling",
        description: "Professional import/export services with careful attention to detail for your valued trophies",
        highlight: "Import & Export"
      },
      {
        icon: <FileCheck className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Documentation",
        description: "Complete management of CITES permits and customs clearance by our experienced international trade team",
        highlight: "Expert Processing"
      },
      {
        icon: <Scale className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Regulation Compliance",
        description: "Full compliance with international regulations, ensuring smooth and legal trophy transportation",
        highlight: "Legal Compliance"
      },
      {
        icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Safe Transport",
        description: "Reliable security measures and comprehensive insurance coverage for your peace of mind",
        highlight: "Protected Shipping"
      },
      {
        icon: <Plane className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "International Service",
        description: "Worldwide shipping network with experienced handlers ensuring safe delivery",
        highlight: "Global Coverage"
      },
      {
        icon: <Clock className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Support Service",
        description: "Round-the-clock assistance providing updates and personal support",
        highlight: "Always Available"
      }
    ],
    es: [
      {
        icon: <Trophy className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Gestión de Trofeos",
        description: "Servicios profesionales de importación/exportación con atención al detalle para tus valiosos trofeos",
        highlight: "Importación y Exportación"
      },
      {
        icon: <FileCheck className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Documentación",
        description: "Gestión completa de permisos CITES y despacho aduanero por nuestro equipo experto en comercio internacional",
        highlight: "Gestión Experta"
      },
      {
        icon: <Scale className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Cumplimiento Legal",
        description: "Cumplimiento total con las normativas internacionales, garantizando un transporte seguro y legal",
        highlight: "Normativa Legal"
      },
      {
        icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Transporte Seguro",
        description: "Medidas de seguridad fiables y seguro completo para tu tranquilidad",
        highlight: "Envío Protegido"
      },
      {
        icon: <Plane className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Servicio Internacional",
        description: "Red de envíos mundial con personal experimentado que garantiza entregas seguras",
        highlight: "Cobertura Global"
      },
      {
        icon: <Clock className="h-10 w-10 sm:h-12 sm:w-12" />,
        title: "Servicio de Apoyo",
        description: "Asistencia las 24 horas con actualizaciones y apoyo personalizado",
        highlight: "Siempre Disponibles"
      }
    ]
  };

  const currentServices = services[language];

  return (
    <section id="services" className="py-16 sm:py-24 bg-primary-dark text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark to-primary-dark" />
      <div className="relative section-container">
        <AnimatedSection>
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-5xl font-medium mb-6 sm:mb-8 text-primary-gold">{t('services.title')}</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentServices.map((service, index) => (
              <div key={index} className="luxury-border rounded-xl">
                <div className="glass-effect p-6 sm:p-8 rounded-xl h-full">
                  <div className="mb-6 text-primary-gold transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-primary-gold/80 mb-2 block uppercase">
                    {service.highlight}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium mb-4 text-primary-gold">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}