import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <>
      <div id="contacto" className="py-4 "></div>
      <div className="bg-dark contact py-5">
        <section className="container  ">
          <h1 className="fw-light mb-5 text-center">Contacto</h1>
          <div className="row  g-4 text-start">
            <div className="col-12 col-mb-6">
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
                Mensaje
              </label>
              <textarea
                style={{ minHeight: 200, resize: 'none' }}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
