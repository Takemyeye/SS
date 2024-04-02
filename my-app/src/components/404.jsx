import React from 'react';
import './styles/404.css'
import './styles/Preloader.css'

const NotFound = () => {
  return (
   <div className='Conteiner-404'>
    <div className="loader">
        <span>S</span>
        <span>o</span>
        <span>u</span>
        <span>l</span>
        <span>S</span>
        <span>w</span>
        <span>a</span>
        <span>p</span>
      </div>
        <div className='conteiner-1-404'>
          <div className='Error'>
            Error 
            <span className='Folling-down-404'>
            4
            <span className='light'>
            0
            </span>
            4
            </span>
          </div>
        <div className='Page'>Page Not Found</div>
      </div>
    </div>
  );
};
export default NotFound;