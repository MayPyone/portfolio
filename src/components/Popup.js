import React from 'react';
import close from '../assets/img/close.svg';
const Popup = ({ title, languages, imgUrl, onClose, des, live, source }) => {
  return (
    <div className="container popup">
      <div className="popup-inner">
        <div className='popup-secondInner'>
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
      <button className=""> <a href={live}>See live</a></button>
      <button className=""><a href={source}>See source</a></button>
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
