import './style.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Juan Agustín Alejandro</h1>
        <p>
          Software Developer especializado en React Native con experiencia en
          arquitecturas escalables y aplicaciones transaccionales
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            Ver Proyectos
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
