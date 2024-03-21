import React from 'react';
import close from '../assets/img/close.svg';

const Popup = ({ title, languages, imgUrl, onClose, des, live, source }) => {

  const handleSeeLiveClick = () => {
    window.open(live, '_blank');
  };

  const handleSeeSourceClick = () => {
    window.open(source, '_blank');
  };

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

          <div className="container">
            <div className="row description">
              <div className="col-md-5 col-sm-12">  
                <img src={imgUrl} alt={title} />
              </div>
              <div className="col-md-7 col-sm-12 des">
                <p>{des}</p>
                <div className='popup-btn'>
                  <button className="" onClick={handleSeeLiveClick}>See live</button>
                  <button className="" onClick={handleSeeSourceClick}>See source</button>
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
