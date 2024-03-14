import React from 'react';

const Contact = () => {
  return (
    <>
      <div id='contacto' className='py-4 '></div>
      <h2 className='text-center m-5'>Contactame</h2>
      <div className='contact d-flex justify-content-center'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSeip11Y3RxBHn7Vg201Mm-4skPDU2e-rOzKsMpg-ONUEk6azA/viewform?embedded=true'
          width='640'
          height='706'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'>
          Cargando…
        </iframe>
      </div>
    </>
  );
};

export default Contact;
