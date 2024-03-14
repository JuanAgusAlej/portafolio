import React, { useEffect, useState } from 'react';

const Header = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= window.innerHeight - 100) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <nav
      className={
        navbarColor
          ? 'navbar fixed-top navbar-expand-lg navbar-light fondoNav'
          : 'navbar fixed-top navbar-expand-lg navbar-light'
      }>
      <div className='container-fluid '>
        <a className='navbar-brand text-light' href='#'>
          <p>Portafolio</p>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-end w-100 d-flex justify-content-end'>
            <li className='nav-item '>
              <a className='nav-link fs-5 text-light ' href='#info'>
                Sobre Mi
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link fs-5 text-light' href='#Technology'>
                Mis Habilidades
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link fs-5 text-light' href='#proyectos'>
                Proyecto
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link fs-5 text-light' href='#Experiencia'>
                Mi Experiencia
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link fs-5 text-light' href='#contacto'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
