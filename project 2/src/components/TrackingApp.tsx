import React from 'react';
import { Smartphone, MapPin, Bell, Shield } from 'lucide-react';

export default function TrackingApp() {
  const features = [
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-gold" />,
      title: "Live Tracking",
      description: "Monitor your trophy's journey in real-time"
    },
    {
      icon: <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-primary-gold" />,
      title: "Status Updates",
      description: "Instant notifications on progress"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium mb-6">Track Your Trophy</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-primary-dark/50 p-4 sm:p-6 rounded-lg border border-primary-gold/20">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px]">
              <div className="aspect-[9/19] bg-primary-dark rounded-[2rem] sm:rounded-[3rem] p-3 sm:p-4">
                <div className="h-full w-full bg-primary-gold/10 rounded-[1.75rem] sm:rounded-[2.5rem] p-3 sm:p-4">
                  <div className="bg-primary-dark/90 h-full w-full rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6" />
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 -bottom-6 -left-6 bg-gradient-to-r from-primary-gold/20 to-hunter-brown/20 rounded-[3rem] sm:rounded-[4rem] -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}