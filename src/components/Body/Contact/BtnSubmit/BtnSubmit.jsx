import React from 'react';
import './btnStyle.css';

export const BtnSubmit = ({ sendData }) => {
  return (
    <>
      {!sendData ? (
        <div className="text-start my-3">
                      <button className="btn btn-primary" type="submit">Enviar</button>

        </div>
      ) : (
        <div className="text-start my-3">
          <button
            className="btn btn-primary btnColor"
            disabled
            type="submit">
            <div className="d-flex">
              <div id="fountainG_1" className="fountainG"></div>
              <div id="fountainG_2" className="fountainG"></div>
              <div id="fountainG_3" className="fountainG"></div>
            </div>
          </button>
        </div>
      )}
    </>
  );
};
