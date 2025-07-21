import React from 'react';
import imgFondo from '../../../../assets/ImagenPortafolio.png';
import './style.css';

const Card = ({ proyect }) => {
  return (
    <div className="col">
      <div className="card shadow-sm cardStyle">
        <img src={imgFondo} className="card-img cardStyle" alt="..." />
        <div className="card-img-overlay text-center d-flex flex-column">
          <h2 className="card-title">{proyect.title}</h2>
          <div className="card-body d-flex flex-column justify-content-around">
            <p className="card-text">{proyect.description}</p>
            <div className="d-flex justify-content-evenly">
              <a
                className="btn btn-sm btn-outline-light"
                target="_blank"
                href={proyect.repository}
                rel="noreferrer"
              >
                GitHub
              </a>
              {!proyect.diseble && (
                <a
                  className="btn btn-sm btn-outline-light"
                  target="_blank"
                  href={proyect.page}
                  rel="noreferrer"
                >
                  Pages
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
