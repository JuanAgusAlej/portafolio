import React from 'react';
import './footerStyle.css';

const Footer = () => {
  return (
    <div className='bg-dark  pt-2 mt-2 footerStyle' style={{ color: '#fff' }}>
      <div className='row mx-0 justify-content-center  '>
        <div className=' col-md-auto col-9 offset-2 offset-md-0 align-self-center '>
          <p> Sitio desarrollado por: Alejandro, Juan Agustin</p>
          <p> - Todos los derechos reservados &copy; 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
