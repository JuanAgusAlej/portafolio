import React from 'react';
import proyectsDB from '../../../assets/json/proyectsDB.json';
import Card from './Card/Card.jsx';

const Proyects = () => {
  return (
    <>
      <br id="proyectos" />
      <div className="proyectColor">
        <div className="album pb-3">
          <div className="container text-center">
            <h2 className="mb-3">Proyectos</h2>
            <p>
              Los proyectos desarrollados pueden consultarse en el siguiente
              enlace:
              <a
                href="https://github.com/JuanAgusAlej?tab=repositories"
                target="blank"
                className="mx-1"
                rel="noopener noreferrer"
              >
                Ver proyectos en GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyects;
