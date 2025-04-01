//Modal.js

import React from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className='modal-close-button'>닫기</button>
      </div>
    </div>
  );
};

export default Modal;