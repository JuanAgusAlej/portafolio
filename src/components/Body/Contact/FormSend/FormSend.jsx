import React from 'react';
import './style.css';

const FormSend = () => {
  return (
    <div
      className="containerBox"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        className="card-body text-start my-3 borderFormSend p-3 "
        style={{
          maxWidth: 640,
          margin: 12,
        }}>
        <h5 className="card-title text-center" style={{ fontSize: 38 }}>
          Mensaje Enviado
        </h5>
        <p className="card-text mt-3">
          Nos pondremos en contacto a la brevedad.
        </p>
      </div>
    </div>
  );
};

export default FormSend;
