import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-gold/80">
      <div className="scroll-indicator">
        <ChevronDown className="h-6 w-6" />
      </div>
    </div>
  );
}