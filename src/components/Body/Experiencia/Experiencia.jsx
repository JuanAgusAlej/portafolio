import React from 'react';
import { CardJob } from './CardJob/CardJob.jsx';
import jobs from '../../../assets/json/jobs.json';

export const Experiencia = () => {
  return (
    <div id="Experiencia" className="container">
      <h2 className="text-center m-5">Mi Experiencia</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {jobs.content.map((job) => (
          <CardJob key={job.title} job={job} />
        ))}
      </div>
    </div>
  );
};
