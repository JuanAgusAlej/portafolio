import { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const isSubmitDisabled = useMemo(
    () => !form.name || !form.email || !form.message || status === 'loading',
    [form, status],
  );

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer id="contact">
      <h2>¿Hablamos?</h2>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/juanagusalej/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          in
        </a>{' '}
        <a
          href="https://wa.me/5491154630022"
          target="_blank"
          title="WhatsApp"
          rel="noreferrer"
        >
          💬
        </a>
      </div>
      <div className="contact-form-wrapper">
        <form className="contact-form" id="contactForm">
          <div className="form-group">
            <label>Nombre</label>{' '}
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>{' '}
            <input
              value={form.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              required
              placeholder="tu@email.com"
            />
          </div>
          <div className="form-group">
            <label>Mensaje</label>{' '}
            <textarea
              value={form.message}
              onChange={handleChange}
              id="message"
              name="message"
              required
              placeholder="Cuéntame qué necesitás..."
            ></textarea>
          </div>

          <div className="form-message" id="formMessage">
            {!status && (
              <button
                disabled={isSubmitDisabled}
                onClick={handleSubmit}
                className="form-submit form-message"
                id="submitBtn"
              >
                Enviar Mensaje
              </button>
            )}
            {status === 'loading' && (
              <p className="form-message loading">Enviando...</p>
            )}
            {status === 'success' && (
              <p className="form-message success">
                ¡Mensaje enviado con éxito!
              </p>
            )}
            {status === 'error' && (
              <p className="form-message error">Error al enviar el mensaje.</p>
            )}
          </div>
        </form>
      </div>
      <p className="footer-text">
        © 2024 Juan Agustín Alejandro. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Contact;
