import React from 'react';
import { MapPin, Bell, Shield, Smartphone, Globe, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrackingFeatures() {
  const { language } = useLanguage();

  const features = {
    en: [
      {
        icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Real-Time Location",
        description: "Track your trophy's exact location throughout its journey"
      },
      {
        icon: <Bell className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Instant Updates",
        description: "Receive notifications at every step of the process"
      },
      {
        icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Secure Transport",
        description: "End-to-end security and insurance coverage"
      },
      {
        icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Mobile App",
        description: "Manage everything from our user-friendly mobile app"
      },
      {
        icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Global Coverage",
        description: "Track shipments anywhere in the world"
      },
      {
        icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "24/7 Monitoring",
        description: "Round-the-clock tracking and support"
      }
    ],
    es: [
      {
        icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Ubicación en Tiempo Real",
        description: "Rastree la ubicación exacta de su trofeo durante todo su trayecto"
      },
      {
        icon: <Bell className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Actualizaciones Instantáneas",
        description: "Reciba notificaciones en cada paso del proceso"
      },
      {
        icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Transporte Seguro",
        description: "Seguridad integral y cobertura de seguro de principio a fin"
      },
      {
        icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "App Móvil",
        description: "Gestione todo desde nuestra app móvil fácil de usar"
      },
      {
        icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Cobertura Global",
        description: "Rastree envíos en cualquier parte del mundo"
      },
      {
        icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
        title: "Monitorización 24/7",
        description: "Seguimiento y soporte continuos las 24 horas del día"
      }
    ]
  };

  const titles = {
    en: {
      mainTitle: "Advanced Tracking System",
      subtitle: "Experience complete visibility of your trophy's journey with our sophisticated tracking system",
      comingSoon: "Mobile App Coming Soon"
    },
    es: {
      mainTitle: "Sistema de Seguimiento Avanzado",
      subtitle: "Disfrute de una visibilidad completa del recorrido de su trofeo con nuestro sofisticado sistema de seguimiento",
      comingSoon: "App Móvil Próximamente"
    }
  };

  const currentFeatures = features[language];
  const currentTitles = titles[language];

  return (
    <section id="tracking" className="py-16 sm:py-20 bg-primary-dark text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">{currentTitles.mainTitle}</h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            {currentTitles.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-primary-dark/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-500 group"
            >
              <div className="mb-6 text-primary-gold transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 text-primary-gold">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center px-8 sm:px-10 py-3 sm:py-4 bg-primary-gold/10 text-primary-gold rounded-lg font-medium text-base sm:text-xl border-2 border-primary-gold/30">
            {currentTitles.comingSoon}
          </div>
        </div>
      </div>
    </section>
  );
}