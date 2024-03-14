import React from 'react';
import AboutUs from './AboutUs/AboutUs.jsx';
import Contact from './Contact/Contact.jsx';
import Proyects from './Proyects/Proyects.jsx';
import { Technology } from './Technology/Technology.jsx';
import { Experiencia } from './Experiencia/Experiencia.jsx';

const Body = () => {
  return (
    <>
      <AboutUs />
      <Technology />
      <Proyects />
      <Experiencia />
      <Contact />
    </>
  );
};

export default Body;
