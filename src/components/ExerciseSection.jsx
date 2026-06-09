import React from 'react';

const ExerciseSection = () => {
  return (
    <div className="card animate-fade" style={{ animationDelay: '0.2s', padding: '25px' }}>
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.2rem', 
        marginBottom: '20px', 
        fontWeight: '500',
        lineHeight: '1.4'
      }}>
        Postura e presenza
      </p>
      <div className="video-container" style={{ 
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)', 
        border: 'none',
        borderRadius: '16px',
        overflow: 'hidden'
      }}>
        <iframe
          src="https://www.youtube.com/embed/AxMClvS9op4?modestbranding=1&rel=0&showinfo=0"
          title="Posture Exercise"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ExerciseSection;
