import { experienceData } from '../../data/experienceData';
import './style.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Mi Experiencia</h2>

      <div className="experience-container">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-content">
              <h3>{job.title}</h3>
              <div className="company">
                {job.company} • {job.period}
              </div>

              <ul>
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
