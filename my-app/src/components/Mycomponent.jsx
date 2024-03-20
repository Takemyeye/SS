import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Preloader from './component/Preloader';

const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('...');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'eng');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const phrases = useMemo(() => {
    return {
      ru: ['Что вы найдете здесь?', [
        'Творчество, которое ты еще не видел!',
        'Новые идеи для вдохновения!',
        'Погрузись в мир искусства!',
        'Открой для себя новые горизонты!'
      ]],
      it: ['Cosa troverai qui?', [
        'Creatività che non hai ancora visto!',
        'Nuove idee per ispirarti!',
        'Immergiti nel mondo dell`arte!',
        'Scopri nuovi orizzonti!'
      ]],
      eng: ['What will you find here?', [
        'Creativity you have yet to see!',
        'New ideas for inspiration!',
        'Dive into the world of art!',
        'Discover new horizons!'
      ]]
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases[language][1].length;
      setText(phrases[language][1][index]);
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
            <div className="title"><Link to="/">SoulSwap</Link></div>
            <div>
              <Link to='/Register'>
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
               <i class="fa-solid fa-earth-europe"></i>
             <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-solid fa-earth-asia"></i>
          </div>
        </div>
      </div>
            <div className="block-text">
             <div className="container">
              <span className="Text-span">{phrases[language][0]}</span>
             </div>
               <div className='changingPhrase'>{text}</div>
            </div>
      </div>
      )}
    </>
  );
};

export default MyComponent;
