import React, { useState, useEffect } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const MHA = () => {
  const images = ['MHA1-min.JPG'];
  const desctiption = ['Deku: 10€'];

  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);

  useEffect(() => {
    var splide = new Splide('.splide', {
      gap:120,
      perPage: 1,
      perMove: 1,
      arrows: false,
      pagination: false,
    });

    splide.mount();
  }, []);
  
  return (
    <div className="background">

      <Header />
      <Menu setIsLeftPanelOpen={setIsLeftPanelOpen} isLeftPanelOpen={isLeftPanelOpen}/>

      <div className="splide" id='mySplide' aria-label="Slide">
        <div className="splide__track">
          <ul className="splide__list">
            {images.map((image, index) => (
              <li key={index} className="splide__slide">
                <img src={image} alt={`MHA Slide ${index + 1}`} />
                <div className='hover-info'>
                  <div className='background-price'>
                    <p className='price'>{desctiption[index]}<div className='Fa-price'></div></p>
                  </div>
                  <div className='background-Fa-Shop'>
                    <div className='Fa-Shop'> 
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};