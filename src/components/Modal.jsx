import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, contentStyle }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade" style={contentStyle} onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <X size={24} />
        </button>
        {title && <h2 style={{ marginBottom: '20px' }}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
