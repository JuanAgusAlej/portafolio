import React from 'react';
import proyectsDB from '../../../assets/json/proyectsDB.json';
import Card from './Card/Card.jsx';

const Proyects = () => {
  return (
    <>
      <br id='proyectos' />
      <div className='py-5 proyectColor'>
        <div className='album py-3'>
          <div className='container'>
            <h1 className='fw-light text-center mb-5'>Proyectos</h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              {proyectsDB?.proyects?.map((proyect, i) => (
                <Card proyect={proyect} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyects;
