import React from 'react';

export const CardJob = ({ job }) => {
  return (
    <div className="col ">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">{job.title}</h4>
          <footer className="blockquote-footer mt-2">
            {job.empresa}
            <small className="mx-4">
              {' '}
              {job.fecha.inicio} - {job.fecha.fin}{' '}
            </small>
          </footer>
          <p className="card-text">
            <ul>
              {job.tareas.map((tarea, i) => (
                <li key={i + job.title}>{tarea}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
