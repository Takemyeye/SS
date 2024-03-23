import React, { useState, useEffect } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';
import Splide from '@splidejs/splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const MHA = () => {
  const mha = ['MHA1-min.JPG'];
  const desctiption = ['Deku: 10€'];

  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);

  useEffect(() => {
    var splide = new Splide('.splide', {
      gap:120,
      perPage: 3,
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

      <div className='mein-menu'>
      <div className="splide" id='mySplide' aria-label="Slide">
        <div className="splide__track">
          <ul className="splide__list">
            {mha.map((image, index) => (
              <li key={index} className="splide__slide">
                <Link to='/Shop'>
                <img src={image} alt={`Slide ${index + 1}`} />
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};