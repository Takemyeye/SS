import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const [text, setText] = useState('Творчество, которое ты еще не видел!');

    useEffect(() => {
        const phrases = [
            'Творчество, которое ты еще не видел!',
            'Новые идеи для вдохновения!',
            'Погрузись в мир искусства!',
            'Открой для себя новые горизонты!'
        ];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % phrases.length;
            setText(phrases[index]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(() => {
      return JSON.parse(localStorage.getItem('isLeftPanelOpen')) || false;
    });
  
    useEffect(() => {
      localStorage.setItem('isLeftPanelOpen', JSON.stringify(isLeftPanelOpen));
    }, [isLeftPanelOpen]);
  
    const toggleLeftPanel = () => setIsLeftPanelOpen(!isLeftPanelOpen);
    
  return (
    <>
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
              <Link to="/JJK">Jujutsu Kaisen</Link>
            </div>
            <div className='animemanga'>
              MHA
            </div>
            <div className='animemanga'>
              <Link to="/CON">Call of the Night</Link>
            </div>
          </div>
        </div>
        <div className="block-text">
        <h1 className="conteiner">
            <span className="Text-span">Что вы найдете здесь?</span>
        </h1>
        <h1 id="changingPhrase">{text}</h1>
    </div>
    </div>
    </>
  );
};

export default Home;