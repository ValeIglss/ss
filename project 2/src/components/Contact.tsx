import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from './layout/AnimatedSection';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary-dark text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=2000&q=80")'
        }}
      />
      <div className="absolute inset-0 bg-gradient-luxury" />
      <div className="relative section-container">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-primary-gold mb-6">
              {t('contact.getInTouch')}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="luxury-border rounded-xl">
                <div className="glass-effect p-6 sm:p-8 rounded-xl space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-gold/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 font-bold">Phone</p>
                      <p className="text-lg text-primary-gold hover:opacity-80 transition-opacity">
                        <a href="tel:+34648534436" className="hover:text-primary-gold/80 transition-colors">
                          +34 648 53 44 36
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-gold/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 font-bold">Email</p>
                      <p className="text-lg text-primary-gold hover:opacity-80 transition-opacity">
                        <a href="mailto:operations@importhunt.es" className="hover:text-primary-gold/80 transition-colors">
                          operations@importhunt.es
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="luxury-border rounded-xl">
                <form className="glass-effect p-6 sm:p-8 rounded-xl space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-primary-gold font-bold pl-1 uppercase tracking-wide">
                        {t('contact.name')}
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full bg-primary-dark/60 border border-primary-gold/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold/50 transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-primary-gold font-bold pl-1 uppercase tracking-wide">
                        {t('contact.email')}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full bg-primary-dark/60 border border-primary-gold/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold/50 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-primary-gold font-bold pl-1 uppercase tracking-wide">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-primary-dark/60 border border-primary-gold/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-gold focus:ring-1 focus:ring-primary-gold/50 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>
                  <div className="luxury-border rounded-lg overflow-hidden">
                    <button
                      type="submit"
                      className="w-full bg-primary-dark text-primary-gold py-4 font-medium hover:bg-primary-gold hover:text-primary-dark transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group"
                    >
                      <span>{t('contact.send')}</span>
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}