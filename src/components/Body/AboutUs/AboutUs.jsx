import React from 'react';
import gitHub from '../../../assets/GitHub.png';
import linkedin from '../../../assets/Linkedin.png';
import './style.css';

const AboutUs = () => {
  return (
    <>
      <section
        className="text-center container  justify-content-center"
        id="conteniner"
      >
        <div className="col-lg-10 col-md-8 mx-auto">
          <h1 className="fw-bold">Alejandro, Juan Agustin</h1>
          <h2 className="m-5">Software Developer</h2>

          <a type="button" className="btn btn-outline-light m-3" href="#info">
            Leer Mas
          </a>
          <a
            type="button"
            className="btn btn-outline-light m-3"
            href="#contacto"
          >
            Contacto
          </a>
        </div>
      </section>
      <div id="info" className="py-3"></div>
      <h2 className="text-center pb-3">Sobre mi</h2>
      <section className="text-center  d-flex justify-content-center">
        <div className="card" style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title">
              <b>Juan Agustin Alejandro</b>
            </h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              <b>Software Developer</b>
            </h6>
            <p className="card-text">
              Soy desarrollador mobile con más de 5 años trabajando con React
              Native y Node.js. Me gusta liderar proyectos, resolver problemas y
              trabajar en equipo. Hoy estoy en una startup donde combino
              frontend y backend, siempre buscando mejorar y aprender.
            </p>
            <a
              href="https://www.linkedin.com/in/juanagusalej/"
              target="_blank"
              className="btn btn-light mx-3"
              rel="noreferrer"
            >
              <img src={linkedin} style={{ maxHeight: 25 }} alt="..." />
            </a>
            <a
              href="https://github.com/JuanAgusAlej"
              target="_blank"
              className="btn btn-light mx-3"
              rel="noreferrer"
            >
              <img src={gitHub} style={{ maxHeight: 25 }} alt="..." />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
