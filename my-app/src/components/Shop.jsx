import React, { useState, useEffect, useMemo } from 'react';
import './styles/Shop.css';
import Header from './component/TopPanel';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEarthEurope, faEarthAmericas, faEarthAsia } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const { selectedImage } = useParams();

  const images = ['art/JJK1-min.JPG', 'art/JJK2-min.JPG', 
  'art/JJK3-min.JPG', 'art/JJK4-min.JPG', 'art/JJK5-min.JPG', 
  'art/JJK6-min.JPG', 'art/JJK7-min.JPG', 'art/JJK8-min.JPG', 
  'art/JJK9-min.JPG', 'art/JJK10-min.JPG', 'art/JJK11-min.JPG', 
  'art/JJK12-min.JPG', 'art/JJK13-min.JPG', 'art/MHA1-min.JPG',
  'art/CON1-min.JPG', 'art/CON2-min.JPG','art/CON3-min.JPG'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [animationTime, setAnimationTime] = useState(0);

  const aboutUs = useMemo(() => {
    return {
      ru: 'О нас',
      it: 'Chi siamo',
      eng: 'About us',
    };
  }, []);

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'eng');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const phrases = useMemo(() => {
    return {
      ru: ['Оставьте отзыв нам интересно ваше мнение','Рекомендуйте нас вашим знакомым',
        'Нарисованно  @TakeMyEye','Сайт писал  @TakeMyEye'
      ],
      it: ['Lascia una recensione: la tua opinione ci interessa',
        'Raccomandaci ai tuoi amici',
        'Disegnato da @TakeMyEye',
        'Sito web creato da @TakeMyEye'],
      eng: ['Leave us a review: we value your opinion',
        'Recommend us to your friends',
        'Drawn by @TakeMyEye',
        'Website created by @TakeMyEye']
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    let index = Math.floor(animationTime / 5) % phrases[language].length; 
    setTextIndex(index);
  }, [animationTime, language, phrases]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTime(prevTime => prevTime + 1); 
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  return (
    <div className="background">
      <Header />
      <div className='Main'>
        <div className='Shop-Art'>  
        <img src={`/${images[selectedImage]}`} alt="" />
        </div>
        <div className='Shop-Right'>
          <div className='Shop-Text'>
            <span>Information</span>
          </div>
          <div className='Shop-Description'>
            <span className='DescriptionText'>Description</span>
          </div>
          <div className='Shop-Buy'>
            <div className='background-price-Shop'>
              <p className='price'>Price</p>
            </div>
            <div className='background-Fa-Shop-Shop'>
              <div className='Fa-Shop-Shop'> 
              <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Right-About-Us'>
        <div className='scrol-text'>
          <div className='Text-scrolColor'>
            <div className='Title-Text-Scrol'>
              {aboutUs[language]}
            </div>
            <div className='blockDinamicText'>
              <div className={`dinamicText ${textIndex !== -1 ? 'animated-text' : ''}`}>
                {textIndex !== -1 && phrases[language][textIndex]}
              </div>
            </div>
          </div>
        </div>
        <div className='Animation-Infinite'>
          <span className='row1'>-</span>
          <span className='row2'>-</span>
        </div>
        <div className='Image-scroll'>
          <img src={'/' + images[currentIndex]} alt="" className="active" draggable="false"/>
        </div>
      </div>
      <div className={`changeLanguage ${languageMenuOpen ? 'open' : ''}`} onClick={toggleLanguageMenu}>
        <div className='LanguageBckground'>
          <p>Language</p>
        </div>
        <div className={`Language ${languageMenuOpen ? 'open' : ''}`}>
          <p onClick={() => handleLanguageChange('it')}>It</p>
          <p onClick={() => handleLanguageChange('eng')}>Eng</p>
          <p onClick={() => handleLanguageChange('ru')}>Ru</p>  
          <div className='iconLenguage'>
            <FontAwesomeIcon icon={faEarthEurope} />
            <FontAwesomeIcon icon={faEarthAmericas} />
            <FontAwesomeIcon icon={faEarthAsia} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;