import React, { useState, useEffect, useMemo } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';

const Home = () => {
  const [text, setText] = useState('...');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'ing');
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
      ing: ['What will you find here?', [
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
      <div className="background">
        <Header />
        <Menu />
        
        <div className={`changeLanguage ${languageMenuOpen ? 'open' : ''}`} onClick={toggleLanguageMenu}>
          Language
          <div className={`Language ${languageMenuOpen ? 'open' : ''}`}>
            <p onClick={() => handleLanguageChange('it')}>It</p>
            <p onClick={() => handleLanguageChange('ing')}>Ing</p>
            <p onClick={() => handleLanguageChange('ru')}>Ru</p>  
            <div className='iconLenguage'>
            <i class="fa-solid fa-earth-europe"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-solid fa-earth-asia"></i>
            </div>
          </div>
        </div>
        <div className='displayoff'>
          <div className="block-text">
            <div className="conteiner">
              <span className="Text-span">{phrases[language][0]}</span>
            </div>
            <div className='changingPhrase'>{text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
