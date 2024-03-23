import React, { useState, useEffect, useMemo } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';

const Home = () => {
  
  const [text, setText] = useState('...');
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
    <div className="background">
      <Header />
      <Menu />
      <div className={`changeLanguage ${languageMenuOpen ? 'open' : ''}`} onClick={toggleLanguageMenu}>
        <p>Language</p>
        <div className={`Language ${languageMenuOpen && 'open'}`}>
          <p onClick={() => handleLanguageChange('it')}>It</p>
          <p onClick={() => handleLanguageChange('eng')}>Eng</p>
          <p onClick={() => handleLanguageChange('ru')}>Ru</p>  
          <div className='iconLenguage'>
            <i className="fa-solid fa-earth-europe"></i>
            <i className="fa-solid fa-earth-americas"></i>
            <i className="fa-solid fa-earth-asia"></i>
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
  );
};

export default Home;