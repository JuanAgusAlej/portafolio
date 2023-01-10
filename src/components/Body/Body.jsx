import React from 'react';
import imgFondo from '../../assets/ImagenPortafolio.png';
import gitHub from '../../assets/GitHub.png';
import linkedin from '../../assets/Linkedin.png';

const Body = () => {
  return (
    <>
      <main>
        <div id="inicio" className="py-5"></div>
        <section className="text-center container">
          <div className="row pt-lg-5">
            <div className="col-lg-10 col-md-8 mx-auto">
              <h1 className="fw-light">Alejandro, Juan Agustin</h1>
              <p className="lead text-muted">
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
        <div id="proyectos" className="py-4"></div>
        <div className="album py-3">
          <div className="container">
            <h1 className="fw-light text-center mb-5">Proyectos</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm" style={{ color: 'white' }}>
                  <img src={imgFondo} className="card-img" alt="..." />
                  <div className="card-img-overlay text-center d-flex flex-column">
                    <h2 className="card-title">Card title</h2>
                    <div className="card-body d-flex flex-column justify-content-around">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-evenly">
                        <a className="btn btn-sm btn-outline-light">GitHub</a>
                        <a className="btn btn-sm btn-outline-light">Pages</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="#contacto" className="py-4"></div>
        <section className="container ">
          <h1 className="fw-light mb-5">Contacto</h1>
          <div className="row  g-4 text-start">
            <div className="col">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="col">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Asunto
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label">
                Example textarea
              </label>
              <input
                style={{ minHeight: 200 }}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Body;
