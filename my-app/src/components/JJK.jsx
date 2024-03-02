import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const JJK = () => {
  const images = ['JJK1-min.JPG', 'JJK2-min.JPG', 'JJK3-min.JPG', 'JJK4-min.JPG', 'JJK5-min.JPG', 'JJK6-min.JPG', 'JJK7-min.JPG', 'JJK8-min.JPG', 'JJK9-min.JPG', 'JJK10-min.JPG', 'JJK11-min.JPG', 'JJK12-min.JPG', 'JJK13-min.JPG'];

  useEffect(() => {
    var splide = new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: false,
    });

    splide.mount();
  }, []);

  return (
    <div className="splide" id='mySplide' aria-label="Slide">
      <div className="splide__track">
        <ul className="splide__list">
          {images.map((image, index) => (
            <li key={index} className="splide__slide">
              <img src={image} alt={`JJK Slide ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
