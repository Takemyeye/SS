import React, { useState,useEffect } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';
import Splide from '@splidejs/splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const CON = () => {
  const con = ['CON1-min.JPG', 'CON2-min.JPG', 'CON3-min.JPG'];
  const desctiption = ['Ko Yamori: 10€','Ko Yamori: 15€', 'Ko Yamori: 15€'];

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


  return (
    <div className="background">

        <Header />
        <Menu setIsLeftPanelOpen={setIsLeftPanelOpen} isLeftPanelOpen={isLeftPanelOpen}/>
    <div className='mein-menu'>
    <div className="splide" id='mySplide' aria-label="Slide">
      <div className="splide__track">
        <ul className="splide__list">
          {con.map((image, index) => (
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