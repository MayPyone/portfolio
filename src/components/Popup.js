import React from 'react';
import close from '../assets/img/close.svg';
const Popup = ({ title, languages, imgUrl, onClose, des }) => {
  return (
    <div className="container popup">
      <div className="popup-inner">
        <div>
        <div className="close-btn">
          <button onClick={onClose}><img src={close} alt="close" /></button>
          </div>
        <h3>{title}</h3>
        <ul>
              {languages.map((l, index) => {
                return (<li key={index}>{l}</li>)
              })}
            </ul>

            <div class="container">
  <div class="row description">
    <div class="col-md-5 col-sm-12">  <img src={imgUrl} alt={title} /></div>
    <div class="col-md-7 col-sm-12 des">
     <p>{des}</p>
     <div className='popup-btn'>
      <button className="">See live</button>
      <button className="">See source</button>
     </div>
    </div>
  </div>
  </div>
  </div>
      </div>
    </div>
  );
};

export default Popup;
