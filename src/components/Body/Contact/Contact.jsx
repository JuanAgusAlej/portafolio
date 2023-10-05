import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import emailjs from 'emailjs-com';
import { BtnSubmit } from './BtnSubmit/BtnSubmit.jsx';
// eslint-disable-next-line import/no-unresolved
import ok from '../../../assets/ok.png';
import error from '../../../assets/error.png';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSend, setIsSend] = useState({ msg: '', send: false, img: '' });

  const onSubmit = (data) => {
    setIsSend({ msg: '', send: true });

    emailjs
      .send('service_1i611ca', 'template_bowdqbd', data, process.env.REACT_APP_EMAIL_JS_KEY)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSend({ msg: 'Mensaje Enviado con exito', send: false, img: ok });
        },
        (err) => {
          console.log('FAILED...', err);
          setIsSend({ msg: 'Ups, Intentente nuevamente mas tarde o enviar un correo a alejandro4juan@gmail.com', send: false, img: error });
        },
      );
  };

  return (
    <>
      <div id="contacto" className="py-4 "></div>
      <div className="bg-dark contact py-5">
        <section className="container  ">
          <h1 className="fw-light mb-5 text-center">Contacto</h1>
          {isSend.msg === '' ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row  g-4 text-start">
                <div className="col-12 col-md-6">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className={
                      errors?.email?.message
                        ? 'form-control required'
                        : 'form-control border'
                    }
                    placeholder="name@example.com"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Este Campo es requerido',
                      },
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'El e-mail no es valido',
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mt-2">
                    {errors?.email?.message}
                  </span>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Asunto</label>
                  <input
                    type="text"
                    {...register('subject', {
                      value: 'Quiero contactarme',
                      maxLength: {
                        value: 100,
                        message: 'Maximo 100 caracteres',
                      },
                    })}
                    className={
                      errors?.subject?.message
                        ? 'form-control required'
                        : 'form-control border'
                    }
                  />
                  <span className="text-danger text-small d-block mt-2">
                    {errors?.subject?.message}
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Mensaje *</label>
                  <textarea
                    style={{ minHeight: 200, resize: 'none' }}
                    className={
                      errors?.body?.message
                        ? 'form-control required'
                        : 'form-control border'
                    }
                    {...register('body', {
                      required: {
                        value: true,
                        message: 'Este Campo es requerido',
                      },
                      maxLength: {
                        value: 500,
                        message: 'Maximo 500 caracteres',
                      },
                      minLength: {
                        value: 15,
                        message: 'Minimo 50 caracteres',
                      },
                    })}
                    rows="3"
                  />
                  <span className="text-danger text-small d-block mt-2">
                    {errors?.body?.message}
                  </span>
                </div>
              </div>
              <BtnSubmit sendData={isSend.send} />
            </form>
          ) : (
            <>
              <div className="text-center">
                <h2 className="fw-light mb-5 text-center">{isSend.msg}</h2>
                <img src={isSend.img} style={{ maxWidth: 200 }} />
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Contact;
