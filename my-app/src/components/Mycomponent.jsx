import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser,faEarthEurope, faEarthAmericas, faEarthAsia } from '@fortawesome/free-solid-svg-icons';

import Preloader from './component/Preloader';

const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'eng');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [languageChangeKey, setLanguageChangeKey] = useState(0);

  const principalPhrases = useMemo(() => {
    return {
      ru: 'Что вы найдете здесь?',
      it: 'Cosa troverai qui?',
      eng: 'What will you find here?',
    };
  }, []);

  const phrases = useMemo(() => {
    return {
      ru: ['Творчество, которое ты еще не видел!',
        'Новые идеи для вдохновения!',
        'Погрузись в мир искусства!',
        'Открой для себя новые горизонты!'],
      it: ['Creatività che non hai ancora visto!',
        'Nuove idee per ispirarti!',
        'Immergiti nel mondo dell`arte!',
        'Scopri nuovi orizzonti!'],
      eng: ['Creativity you have yet to see!',
        'New ideas for inspiration!',
        'Dive into the world of art!',
        'Discover new horizons!']
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases[language].length;
      setText(phrases[language][index]);
    }, 5000);
    return () => clearInterval(interval);
  }, [language, phrases]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setText(phrases[lang][0]);
    setLanguageMenuOpen(false);
    setLanguageChangeKey(prevKey => prevKey + 1); 
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="background">
          <header className="topPanel">
      <div className="topPanelAccess">
        <div className="socium">
          <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://t.me/takemyeye" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://github.com/Takemyeye" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>  
        </div>
      </div>
      <div className="title"><Link to="/">SoulSwap</Link></div>
      <div>
        <Link to='/register'>
          <button className='accessButton'>
            <span className="circle" aria-hidden="true">
            <div className="user">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </span>
            <span className="buttontext">Access</span> 
          </button>
        </Link>
      </div>
    </header>
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
            <div className="block-text" key={languageChangeKey}> 
              <div className="container">
                <span className="Text-span">{principalPhrases[language]}</span>
              </div>
                <div className='changingPhrase'>{text}</div>
            </div>
        </div>
      )}
    </>
  );
};

export default MyComponent;