import React from 'react';
import Services from './Services';
import Process from './Process';
import TrackingFeatures from './TrackingFeatures';

interface MobileSectionProps {
  activeSection: string | null;
}

export default function MobileSection({ activeSection }: MobileSectionProps) {
  const renderSection = () => {
    switch (activeSection) {
      case 'services':
        return <div id="services"><Services /></div>;
      case 'process':
        return <div id="process"><Process /></div>;
      case 'tracking':
        return <div id="tracking"><TrackingFeatures /></div>;
      default:
        return null;
    }
  };

  if (!activeSection) return null;

  return (
    <div className="animate-fade-in">
      {renderSection()}
    </div>
  );
}