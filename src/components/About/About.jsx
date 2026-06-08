import React from 'react';
import './style.css';

export const About = () => {
  return (
    <section id="about" className="about">
      <div>
        <h2>Sobre mí</h2>
        <p>
         Soy un Software Engineer / Full Stack Developer apasionado por crear experiencias digitales excepcionales de punta a punta. Con una sólida trayectoria combinando el desarrollo mobile en React Native con backends robustos en Node.js, Java y .NET, he liderado arquitecturas escalables en el sector bancario y de medios digitales. Mi enfoque combina la excelencia técnica, la aplicación de patrones de diseño (SOLID, Arquitectura Hexagonal) y una mentalidad orientada a resolver problemas complejos de negocio.
        </p>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>Frontend</h3>
            <p>React Native, React, Next.js, TypeScript</p>
          </div>
          <div className="skill-item">
            <h3>Backend</h3>
            <p>Node.js, NestJS, Java (Spring), .NET</p>
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
            <strong>🔧 Stack:</strong> React Native, React, Node.js, Java, .NET, TypeScript
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
