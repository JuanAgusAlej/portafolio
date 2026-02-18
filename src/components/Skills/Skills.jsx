import React from 'react';
import './style.css';

export const Skills = () => {
  return (
    <>
      <section id="skills" className="skills">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="skills-wrapper">
          <div className="skill-badge">
            <div className="icon">⚛️</div>
            <p>React Native</p>
          </div>
          <div className="skill-badge">
            <div className="icon">🔵</div>
            <p>React</p>
          </div>
          <div className="skill-badge">
            <div className="icon">⚡</div>
            <p>Next.js</p>
          </div>
          <div className="skill-badge">
            <div className="icon">📘</div>
            <p>TypeScript</p>
          </div>
          <div className="skill-badge">
            <div className="icon">☕</div>
            <p>Java</p>
          </div>
          <div className="skill-badge">
            <div className="icon">🍃</div>
            <p>Spring</p>
          </div>
          <div className="skill-badge">
            <div className="icon">🟩</div>
            <p>Node.js</p>
          </div>
          <div className="skill-badge">
            <div className="icon">🪶</div>
            <p>NestJS</p>
          </div>
          <div className="skill-badge">
            <div className="icon">📦</div>
            <p>MongoDB</p>
          </div>
          <div className="skill-badge">
            <div className="icon">🗃️</div>
            <p>SQL</p>
          </div>
          <div className="skill-badge">
            <div className="icon">🐙</div>
            <p>Git</p>
          </div>
          <div className="skill-badge">
            <div className="icon">🎨</div>
            <p>CSS</p>
          </div>
        </div>
      </section>
      <section id="soft-skills">
        <div className="soft-skills-section">
          <h3>💡 Habilidades Blandas</h3>
          <div className="soft-skills-grid">
            <div className="soft-skill-badge">
              <div className="icon">👥</div>
              <h4>Liderazgo</h4>
              <p>Dirijo equipos técnicos y decisiones estratégicas</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">🔍</div>
              <h4>Análisis de Errores</h4>
              <p>Debugging profundo y resolución compleja</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">💬</div>
              <h4>Comunicación</h4>
              <p>Explico conceptos técnicos con claridad</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">🤝</div>
              <h4>Trabajo en Equipo</h4>
              <p>Colaboración efectiva multidisciplinaria</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">🎯</div>
              <h4>Resolución de Problemas</h4>
              <p>Enfoque metodológico e innovador</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">📚</div>
              <h4>Aprendizaje Continuo</h4>
              <p>Pasión por nuevas tecnologías</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">⚡</div>
              <h4>Adaptabilidad</h4>
              <p>Flexible en contextos y metodologías</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">🧠</div>
              <h4>Pensamiento Analítico</h4>
              <p>Análisis de datos e informado</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">🎨</div>
              <h4>Atención al Detalle</h4>
              <p>Cuidado en UX/UI y código</p>
            </div>
            <div className="soft-skill-badge">
              <div className="icon">⏱️</div>
              <h4>Gestión del Tiempo</h4>
              <p>Organización para cumplir deadlines</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
