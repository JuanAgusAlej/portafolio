import './style.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">JA</div>
        <ul className="nav-links">
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#experience">Experiencia</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#soft-skills">Soft Skills</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a
              className="cv-btn"
              target="_blank"
              href="https://drive.google.com/file/d/1dkCvVhvbHar0RZZNX0Qh7MvfFMiHENGU/view?usp=sharing"
              rel="noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
