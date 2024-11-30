import React from 'react';
import { LOGO_FILTER } from '../../utils/constants';

interface LogoProps {
  size?: 'small' | 'large';
}

export default function Logo({ size = 'small' }: LogoProps) {
  const sizes = {
    small: {
      container: 'flex items-center gap-4',
      mascot: {
        wrapper: 'w-10 h-10 sm:w-12 sm:h-12',
        image: 'w-full h-full object-contain'
      },
      text: 'h-5 sm:h-6'
    },
    large: {
      container: 'flex items-center gap-6',
      mascot: {
        wrapper: 'w-20 h-20 sm:w-24 sm:h-24 rounded-full luxury-border p-0.5 animate-float',
        inner: 'w-full h-full bg-primary-dark rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110',
        image: 'w-4/5 h-4/5 object-contain'
      },
      text: 'h-16 sm:h-28'
    }
  };

  const currentSize = sizes[size];

  return (
    <div className={currentSize.container}>
      {size === 'large' ? (
        <div className={currentSize.mascot.wrapper}>
          <div className={currentSize.mascot.inner}>
            <img 
              src="https://i.postimg.cc/JtL7YJdj/Logo-camel-sin-texto-ni-fondo.png" 
              alt="ImportHunt Mascot" 
              className={currentSize.mascot.image}
              style={{ filter: LOGO_FILTER }}
            />
          </div>
        </div>
      ) : (
        <div className={currentSize.mascot.wrapper}>
          <img 
            src="https://i.postimg.cc/JtL7YJdj/Logo-camel-sin-texto-ni-fondo.png" 
            alt="ImportHunt Mascot" 
            className={currentSize.mascot.image}
            style={{ filter: LOGO_FILTER }}
          />
        </div>
      )}
      <img 
        src="https://i.postimg.cc/GtR6ZQd3/Logo-camel-sin-fondo-copy.png" 
        alt="ImportHunt" 
        className={`${currentSize.text} object-contain transform hover:scale-105 transition-transform duration-300`}
        style={{ filter: LOGO_FILTER }}
      />
    </div>
  );
}