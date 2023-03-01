import React from 'react';
import gitHub from '../../../assets/GitHub.png';
import linkedin from '../../../assets/Linkedin.png';
import './style.css';

const AboutUs = () => {
  return (
    <>
      <div id="inicio" className="py-4 py-md-4"></div>
      <div className="bg-dark pt-4 aboutUs">
        <section className="text-center container ">
          <div className="row pt-lg-5 ">
            <div className="col-lg-10 col-md-8 mx-auto">
              <h1 className="fw-light">Alejandro, Juan Agustin</h1>
              <p className="fs-6 lead ">
                Soy un apasionado de la programación y de resolver problemas
                complejos con soluciones innovadoras. Me he formado como
                Fullstack Developer a través de un Coding Bootcamp y he
                trabajado en proyectos utilizando la metodología Scrum con
                excelentes resultados. Me encanta aprender y mejorar
                continuamente mis habilidades para seguir creciendo como
                profesional en el mundo de la tecnología.
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
