import React from 'react';
import { InlineWidget } from 'react-calendly';

const BookingSection = () => {
  return (
    <div className="card animate-fade" style={{ animationDelay: '0.3s', padding: '20px 10px' }}>
      <p className="card-title" style={{ textAlign: 'center', marginBottom: '20px', padding: '0 20px' }}>
        Vuoi capire quali sono gli esercizi giusti per te? Prenota qui sotto la tua consulenza gratuita.
      </p>
      <div style={{ 
        borderRadius: '16px', 
        overflow: 'hidden', 
        background: '#ffffff', 
        transform: 'translateZ(0)', 
        padding: '10px',
        boxSizing: 'border-box'
      }}>
        <InlineWidget 
          url="https://calendly.com/teoecampa/30min" 
          styles={{ height: '660px', width: '100%', minWidth: 'auto' }} 
          pageSettings={{
            hideEventTypeDetails: true,
            hideLandingPageDetails: true
          }}
        />
      </div>
    </div>
  );
};

export default BookingSection;
