import React from 'react';
import './style.css';

export const About = () => {
  return (
    <section id="about" className="about">
      <div>
        <h2>Sobre mí</h2>
        <p>
          Soy un desarrollador mobile apasionado por crear experiencias de
          usuario excepcionales. Con más de 3 años de experiencia en React
          Native, he liderado arquitecturas escalables y trabajado con
          tecnologías modernas en startups y empresas consolidadas.
        </p>
        <p>
          Mi enfoque combina excelencia técnica, buenas prácticas de desarrollo
          y una mentalidad colaborativa orientada a resolver problemas
          complejos.
        </p>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>Frontend</h3>
            <p>React Native, React, Next.js, TypeScript</p>
          </div>
          <div className="skill-item">
            <h3>Backend</h3>
            <p>Node.js, NestJS, Spring Boot</p>
          </div>
          <div className="skill-item">
            <h3>Bases de Datos</h3>
            <p>MongoDB, SQL, PostgreSQL</p>
          </div>
          <div className="skill-item">
            <h3>DevOps</h3>
            <p>Git, CI/CD, Docker</p>
          </div>
        </div>
      </div>
      <div className="conteiner">
        <div className="conteiner-text">
          <p>
            <strong>📱 Especialidad:</strong> Desarrollo mobile con React Native
            y arquitecturas escalables
          </p>
          <p>
            <strong>🏢 Experiencia:</strong> Banco Hipotecario, ItRocks,
            GlobalNews, IUTRACE
          </p>
          <p>
            <strong>🎯 Enfoque:</strong> Calidad, rendimiento y experiencia del
            usuario
          </p>
          <p>
            <strong>🔧 Stack:</strong> React Native • React • Next.js • Node.js
            • TypeScript
          </p>
          <p>
            💡
            <strong>Soft Skills:</strong> Liderazgo, Comunicación, Trabajo en
            Equipo, Resolución de Problemas, Adaptabilidad
          </p>
        </div>
      </div>
    </section>
  );
};
