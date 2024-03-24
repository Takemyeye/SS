import React, { useState, useEffect } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';
import Splide from '@splidejs/splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const MHA = () => {
  const mhaImage = 'art/MHA1-min.JPG';
  const images = ['art/JJK1-min.JPG', 'art/JJK2-min.JPG', 
  'art/JJK3-min.JPG', 'art/JJK4-min.JPG', 'art/JJK5-min.JPG', 
  'art/JJK6-min.JPG', 'art/JJK7-min.JPG', 'art/JJK8-min.JPG', 
  'art/JJK9-min.JPG', 'art/JJK10-min.JPG', 'art/JJK11-min.JPG', 
  'art/JJK12-min.JPG', 'art/JJK13-min.JPG', mhaImage,
  'art/CON1-min.JPG', 'art/CON2-min.JPG','art/CON3-min.JPG'];

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
              <li key={mhaImage} className="splide__slide">
                <Link to={`/shop/${images.indexOf(mhaImage)}`}>
                <img src={mhaImage} alt="My Hero Academia Poster" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
