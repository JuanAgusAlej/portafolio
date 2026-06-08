import React from 'react';
import { projectsData } from '../../data/projectsData'; // Asegurá la ruta de tus constantes

const ProjectCards = () => {
  return (
    <section className="py-16 text-white" id="proyectos">
      <div className="max-w-6xl mx-auto px-6">

        {/* Grilla Contenedora: 1 columna en mobile, 2 en pantallas medianas/grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/80 rounded-xl p-6 border border-slate-800 flex flex-col justify-between hover:border-[#00d9ff]/50 transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              <div>
                {/* Título y Tipo de App */}
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tecnologías como Badges Dinámicos */}
                <div className="mb-6 mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(',').map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-950 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-800"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Listado de Logros e Ingeniería */}
                <ul className="space-y-3 text-sm text-gray-400 mb-6 list-none pl-0">
                  {project.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-cyan-400 mt-1 text-xs">➔</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones de Acción (Footer de la Card) */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-800/60">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-[#00d9ff] to-[#7c3aed] hover:opacity-90 text-[#0f172a] text-center font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm shadow-md shadow-cyan-500/10"
                >
                  {project.title.includes('TaskMaster') ? 'Descargar APK' : 'Ver Aplicación'}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-800/80 hover:bg-slate-700/80 text-white text-center font-medium py-2.5 px-4 rounded-lg transition-colors text-sm border border-slate-700"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
