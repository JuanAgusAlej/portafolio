import React from 'react';
import gitHub from '../../assets/GitHub.png';
import linkedin from '../../assets/Linkedin.png';
import './style.css';

const Footer = () => {
  return (
    <div className='container py-2 my-2 footer'>
      <div
        className="row mx-0 justify-content-center  ">
        <div className="col-md-2 col my-3 offset-4 offset-md-0" >
          <a href='https://github.com/JuanAgusAlej' target='_blank' rel="noreferrer"><img src={gitHub} className='mx-md-3' style={{ maxHeight: 50 }} alt="..." /></a>
          <a href='https://www.linkedin.com/in/juanagusalej/' target='_blank' rel="noreferrer"><img src={linkedin} className='mx-3' style={{ maxHeight: 50 }} alt="..." /></a>
        </div>
        <div className="col-md-auto col-9 offset-2 offset-md-0 align-self-center ">
        <p>&copy; 2017–2021 Company, Inc. &middot;</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
