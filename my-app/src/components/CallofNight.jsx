import React, { useState, useEffect } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';
import Splide from '@splidejs/splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const CON = () => {
  const images = ['JJK1-min.JPG', 'JJK2-min.JPG', 
  'JJK3-min.JPG', 'JJK4-min.JPG', 'JJK5-min.JPG', 
  'JJK6-min.JPG', 'JJK7-min.JPG', 'JJK8-min.JPG', 
  'JJK9-min.JPG', 'JJK10-min.JPG', 'JJK11-min.JPG', 
  'JJK12-min.JPG', 'JJK13-min.JPG', 'MHA1-min.JPG',
  'CON1-min.JPG', 'CON2-min.JPG','CON3-min.JPG'];

  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);

  useEffect(() => {
    var splide = new Splide('.splide', {
      gap:100,
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: false,
    });

    splide.mount();
  }, []);

  const lastThreeImages = images.slice(-3); 

  return (
    <div className="background">
      <Header />
      <Menu setIsLeftPanelOpen={setIsLeftPanelOpen} isLeftPanelOpen={isLeftPanelOpen}/>
      <div className='mein-menu'>
        <div className="splide" id='mySplide' aria-label="Slide">
          <div className="splide__track">
            <ul className="splide__list">
              {lastThreeImages.map((image, index) => (
                <li key={index} className="splide__slide">
                  <Link to={`/shop/${images.indexOf(image)}`}>
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