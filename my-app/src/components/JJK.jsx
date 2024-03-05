import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const JJK = () => {
  const images = ['JJK1-min.JPG', 'JJK2-min.JPG', 'JJK3-min.JPG', 'JJK4-min.JPG', 'JJK5-min.JPG', 'JJK6-min.JPG', 'JJK7-min.JPG', 'JJK8-min.JPG', 'JJK9-min.JPG', 'JJK10-min.JPG', 'JJK11-min.JPG', 'JJK12-min.JPG', 'JJK13-min.JPG'];
  const desctiption = ['Itadori Yuji: 20€','Itadori Yuji: 15€', 'Satoru Gojo: 15€','Itadori Yuji: 15€','Satoru Gojo: 15€','Satoru Gojo: 15€','Sukuna-hand: 10€','Aoi Todo: 20€','Okkotsu Yuta: 20€','Itadori Yuji: 15€','Sukuna: 20€','Choso: 20€','Okkotsu Yuta: 10€'];

  useEffect(() => {
    var splide = new Splide('.splide', {
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: false,
    });

    splide.mount();
  }, []);

  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(() => {
    return JSON.parse(localStorage.getItem('isLeftPanelOpen')) || false;
  });

  useEffect(() => {
    localStorage.setItem('isLeftPanelOpen', JSON.stringify(isLeftPanelOpen));
  }, [isLeftPanelOpen]);

  const toggleLeftPanel = () => setIsLeftPanelOpen(!isLeftPanelOpen);

  return (
    <div className="background">
        <header className="topPanel">
          <div className="topPanelAccess">
            <div className="socium">
              <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://t.me/takemyeye" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://wa.me/3489026911" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        <div>
         <Link to='/'>
          <button className='accessButton'>
             <span className="circle" aria-hidden="true">
                <div className="user">
                  <i className="fa-regular fa-user"></i>
                 </div>
               </span>
             <span className="buttontext">Access</span> 
          </button>
         </Link>
        </div>
          <div className="title"><Link to="/Home">SoulSwap</Link>
          </div>
        </header>

        <button className="btn" onClick={toggleLeftPanel}>
          <span className="icon">
            <svg viewBox="0 0 175 80" width="40" height="40">
              <rect width="80" height="15" fill="#b4a9a9" rx="10"></rect>
              <rect y="30" width="80" height="15" fill="#b4a9a9" rx="10"></rect>
              <rect y="60" width="80" height="15" fill="#b4a9a9" rx="10"></rect>
            </svg>
          </span>
          <span className="text">MENU</span>
        </button>

        <div id="app">
          <div className={`leftPanel ${isLeftPanelOpen ? 'open' : ''}`} id="leftPanel">
            <h3 className="AM">Anime|Manga</h3>
            <div className='animemanga'>
              Jujutsu Kaisen
            </div>
            <div className='animemanga'>
             <Link to="/MHA">MHA</Link>
            </div>
            <div className='animemanga'>
              <Link to="/CON">Call of the Night</Link>
            </div>
          </div>
        </div>
    
    <div className="splide" id='mySplide' aria-label="Slide">
      <div className="splide__track">
        <ul className="splide__list">
          {images.map((image, index) => (
            <li key={index} className="splide__slide">
              <img src={image} alt={`JJK Slide ${index + 1}`} />
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