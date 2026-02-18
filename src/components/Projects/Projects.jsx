import React from 'react';
import './style.css';

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="section-title">Mis Proyectos</h2>
        <p>
          Podés ver todos mis proyectos en GitHub, donde comparto código de
          aplicaciones móviles, web apps, y soluciones full-stack que he
          desarrollado usando las tecnologías más modernas.
        </p>
        <a
          href="https://github.com/JuanAgusAlej?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          {' '}
          Ver en GitHub <span>→</span>{' '}
        </a>
      </div>
    </section>
  );
};
