import React from 'react';
import {
  ReactNative,
  bootstrap,
  css,
  git,
  hibernet,
  html,
  java,
  javaScript,
  mongo,
  nest,
  next,
  node,
  react,
  spring,
  sql,
  typscript,
} from '../../../assets/tecnology';

export const Technology = () => {
  // Lista de tecnologías con su nombre y su icono
  const technologies = [
    { name: 'React Native', icon: ReactNative },
    { name: 'React', icon: react },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'JavaScript', icon: javaScript },
    { name: 'TypeScript', icon: typscript },
    { name: 'CSS', icon: css },
    { name: 'HTML', icon: html },
    { name: 'Git', icon: git },
    { name: 'Java', icon: java },
    { name: 'Node.js', icon: node },
    { name: 'Hibernate', icon: hibernet },
    { name: 'Spring', icon: spring },
    { name: 'MongoDB', icon: mongo },
    { name: 'SQL', icon: sql },
    { name: 'NestJS', icon: nest },
    { name: 'Next.js', icon: next },
  ];

  return (
    <div id="Technology" className="pb-5">
      <div className="container text-center">
        <h2>Mis habilidades</h2>
        <div className="row justify-content-center mt-5">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="col-lg-2 col-md-3 col-4 mb-4 d-flex flex-column align-items-center"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                className="mb-2"
                style={{ maxWidth: '60px', height: 'auto' }}
              />
              <span style={{ fontSize: '1rem' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
