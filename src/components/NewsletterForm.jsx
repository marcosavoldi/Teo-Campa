import React, { useState } from 'react';

const NewsletterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    'fields[nome]': '',
    'fields[cognome]': '',
    'fields[email]': '',
    privacy: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacy) {
      setError('Devi accettare l\'informativa sulla privacy.');
      return;
    }

    setLoading(true);
    setError('');

    const formPayload = new FormData();
    formPayload.append('fields[nome]', formData['fields[nome]']);
    formPayload.append('fields[cognome]', formData['fields[cognome]']);
    formPayload.append('fields[email]', formData['fields[email]']);
    formPayload.append('privacy', '1');
    formPayload.append('ml-submit', '1');
    formPayload.append('anticsrf', 'true');

    try {
      const response = await fetch('https://assets.mailerlite.com/jsonp/1439026/forms/151126560570607390/subscribe', {
        method: 'POST',
        body: formPayload,
        headers: {
          'Accept': 'application/json'
        }
      });
      const result = await response.json();
      if (result.success) {
        onSuccess();
      } else {
        setError('Si è verificato un errore. Riprova più tardi.');
      }
    } catch (err) {
      setError('Errore di connessione. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <p style={{ marginBottom: '10px', fontSize: '1.1rem', textAlign: 'center' }}>
        Vuoi ricevere la nostra newsletter con consigli pratici e aggiornamenti?
      </p>
      
      <div className="newsletter-grid">
        <input
          type="text"
          name="fields[nome]"
          placeholder="Nome"
          required
          value={formData['fields[nome]']}
          onChange={handleChange}
          style={inputStyle}
        />
        
        <input
          type="text"
          name="fields[cognome]"
          placeholder="Cognome"
          required
          value={formData['fields[cognome]']}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      
      <input
        type="email"
        name="fields[email]"
        placeholder="Email"
        required
        value={formData['fields[email]']}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
        <input
          type="checkbox"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          style={{ marginTop: '4px' }}
        />
        <span>
          Acconsento al trattamento dei miei dati personali per ricevere via email contenuti informativi, video gratuiti e aggiornamenti, come indicato nella Privacy & Cookie Policy.
        </span>
      </label>

      {error && <p style={{ color: '#ffb3b3', fontSize: '0.9rem' }}>{error}</p>}

      <button className="btn" type="submit" disabled={loading} style={{ width: '100%' }}>
        {loading ? 'INVIO IN CORSO...' : 'ISCRIVITI'}
      </button>
    </form>
  );
};

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  fontFamily: 'inherit',
  width: '100%',
  boxSizing: 'border-box'
};

export default NewsletterForm;
