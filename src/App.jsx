import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExerciseSection from './components/ExerciseSection';
import BookingSection from './components/BookingSection';
import Modal from './components/Modal';
import PrivacyContent from './components/PrivacyContent';
import logo from './assets/logo.jpg';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isLogoOpen, setIsLogoOpen] = useState(false);

  return (
    <div className="container">
      <Header onLogoClick={() => setIsLogoOpen(true)} />
      <Hero />
      
      <main>
        <ExerciseSection />
        <BookingSection />
      </main>

      <footer className="animate-fade" style={{ animationDelay: '0.4s' }}>
        <p>
          &copy; {new Date().getFullYear()} TeoeCampa | 
          <a onClick={() => setIsPrivacyOpen(true)} style={{ marginLeft: '10px' }}>
            Privacy Policy
          </a>
        </p>
      </footer>



      {/* Modal: Privacy */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Informativa sulla Privacy"
      >
        <PrivacyContent />
      </Modal>

      {/* Modal: Logo Zoom */}
      <Modal
        isOpen={isLogoOpen}
        onClose={() => setIsLogoOpen(false)}
        contentStyle={{ padding: 0, background: 'transparent', boxShadow: 'none' }}
      >
        <div style={{ textAlign: 'center' }}>
          <img 
            src={logo} 
            alt="Logo Large" 
            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }} 
          />
        </div>
      </Modal>
    </div>
  );
}

export default App;
