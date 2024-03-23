import React, { useState,useEffect } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';
import Splide from '@splidejs/splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const JJK = () => {
  const images = ['JJK1-min.JPG', 'JJK2-min.JPG', 'JJK3-min.JPG', 'JJK4-min.JPG', 'JJK5-min.JPG', 'JJK6-min.JPG', 'JJK7-min.JPG', 'JJK8-min.JPG', 'JJK9-min.JPG', 'JJK10-min.JPG', 'JJK11-min.JPG', 'JJK12-min.JPG', 'JJK13-min.JPG'];
  const desctiption = ['Itadori Yuji: 20€','Itadori Yuji: 15€', 'Satoru Gojo: 15€','Itadori Yuji: 15€','Satoru Gojo: 15€','Satoru Gojo: 15€','Sukuna-hand: 10€','Aoi Todo: 20€','Okkotsu Yuta: 20€','Itadori Yuji: 15€','Sukuna: 20€','Choso: 20€','Okkotsu Yuta: 10€'];

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
          {images.map((image, index) => (
            <li key={index} className="splide__slide">
              <Link to={`/shop/${index}`}>
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