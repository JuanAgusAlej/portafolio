import React from 'react';
import gitHub from '../../../assets/GitHub.png';
import linkedin from '../../../assets/Linkedin.png';
import './style.css';

const AboutUs = () => {
  return (
    <>
      <div id="inicio" className="py-4 py-md-4"></div>
      <div className='bg-dark pt-4 aboutUs'>
        <section className="text-center container ">
          <div className="row pt-lg-5 ">
            <div className="col-lg-10 col-md-8 mx-auto">
              <h1 className="fw-light">Alejandro, Juan Agustin</h1>
              <p className="fs-6 lead ">
                Egresado del Coding Bootcamp Fullstack Developer, pero antes
                estudié Lic. Criminalística siempre me gustó investigar,
                analizar y resolver problemas. Mientras avanzaba en la carrera
                no me emocionaba de la misma manera cuando curse Lógica de
                Programación, buscar una solución del problema que no tiene una
                sola respuesta y trabajar con distintas personas; empecé a
                estudiar de manera autodidacta por udemy, youtube o buscando
                información. La decisión de anotarme en el Coding Bootcamp vino
                para realizar un avance a nivel de profesional tanto del stack
                tecnológico como en habilidades blandas, ya que se utilizaba la
                metodología Scrum a lo largo de todo el curso.
              </p>
              <p className="d-flex justify-content-center pt-3 ">
                <a
                  href="https://github.com/JuanAgusAlej"
                  target="_blank"
                  className="btn btn-light mx-3"
                  rel="noreferrer">
                  <img src={gitHub} style={{ maxHeight: 50 }} alt="..." />
                </a>
                <a
                  href="https://www.linkedin.com/in/juanagusalej/"
                  target="_blank"
                  className="btn btn-light mx-3"
                  rel="noreferrer">
                  <img src={linkedin} style={{ maxHeight: 50 }} alt="..." />
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
