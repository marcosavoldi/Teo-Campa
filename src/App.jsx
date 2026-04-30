import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExerciseSection from './components/ExerciseSection';
import BookingSection from './components/BookingSection';
import Modal from './components/Modal';
import NewsletterForm from './components/NewsletterForm';
import PrivacyContent from './components/PrivacyContent';
import logo from './assets/logo.jpg';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isLogoOpen, setIsLogoOpen] = useState(false);

  const handleNewsletterSuccess = () => {
    setIsNewsletterOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <div className="container">
      <Header onLogoClick={() => setIsLogoOpen(true)} />
      <Hero />
      
      <main>
        <ExerciseSection />
        <BookingSection />
        
        <div className="card animate-fade" style={{ animationDelay: '0.35s', marginTop: '40px' }}>
          <h2 className="card-title" style={{ textAlign: 'center' }}>
            Rimani aggiornato
          </h2>
          <NewsletterForm onSuccess={handleNewsletterSuccess} />
        </div>
      </main>

      <footer className="animate-fade" style={{ animationDelay: '0.4s' }}>
        <p>
          &copy; {new Date().getFullYear()} TeoeCampa | 
          <a onClick={() => setIsPrivacyOpen(true)} style={{ marginLeft: '10px' }}>
            Privacy Policy
          </a>
        </p>
      </footer>

      {/* Modal: Newsletter Modal is no longer used as it is inline, but keeping the success one */}
      {/* Modal: Success Message */}
      <Modal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Ottimo lavoro!</h2>
          <p>
            Grazie per esserti iscritto!<br />
            Controlla la tua email, riceverai a breve il link per i video.
          </p>
          <button className="btn" style={{ marginTop: '20px' }} onClick={() => setIsSuccessOpen(false)}>
            CHIUDI
          </button>
        </div>
      </Modal>

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
