import React from 'react';
import {
  ReactNative,
  bootstrap,
  css,
  git,
  hibernet,
  html,
  java,
  javaScript,
  mongo,
  nest,
  next,
  node,
  react,
  spring,
  sql,
  typscript,
} from '../../../assets/tecnology';

export const Technology = () => {
  return (
    <div id='Technology' className='py-5'>
      <div className='container text-center py-5 '>
        <h2>Mis habilidades</h2>
        <div className='row-6'>
          <img src={ReactNative} className='col-lg-1 col-3 mt-3' />
          <img src={react} className='col-lg-1 col-3 mt-3 ' />
          <img src={bootstrap} className='col-lg-1 col-3 mt-3 ' />
          <img src={javaScript} className='col-lg-1 col-3 mt-3 ' />
          <img src={typscript} className='col-lg-1 col-3 mt-3 ' />
          <img src={css} className='col-lg-1 col-3 mt-3 ' />
          <img src={html} className='col-lg-1 col-3 mt-3 ' />
          <img src={git} className='col-lg-1 col-3 mt-3 ' />
          <img src={java} className='col-lg-1 col-3 mt-3 ' />
          <img src={node} className='col-lg-1 col-3 mt-3 ' />
          <img src={hibernet} className='col-lg-1 col-3 mt-3 ' />
          <img src={spring} className='col-lg-1 col-3 mt-3 ' />
          <img src={mongo} className='col-lg-1 col-3 mt-3 ' />
          <img src={sql} className='col-lg-1 col-3 mt-3 ' />
          <img src={nest} className='col-lg-1 col-3 mt-3 ' />
          <img src={next} className='col-lg-1 col-3 mt-3 ' />
        </div>
      </div>
    </div>
  );
};
