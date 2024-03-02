import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';
import { JJK } from './components/JJK';
import { MHA } from './components/MHA';
import { CON } from './components/CON';
import { Home } from './components/Home';

const App = () => {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(() => {
    return JSON.parse(localStorage.getItem('isLeftPanelOpen')) || false;
  });

  useEffect(() => {
    localStorage.setItem('isLeftPanelOpen', JSON.stringify(isLeftPanelOpen));
  }, [isLeftPanelOpen]);

  const toggleLeftPanel = () => setIsLeftPanelOpen(!isLeftPanelOpen);

  return (
    <Router>
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

          <button className='accessButton'>
            <span className="circle" aria-hidden="true">
              <div className="user">
                <i className="fa-regular fa-user"></i>
              </div>
            </span>
            <span className="buttontext">Access</span> 
          </button>

          <div className="title"><Link to="/">SoulSwap</Link>
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
              <Link to="/MHA">MHA</Link>
            </div>
            <div className='animemanga'>
              <Link to="/CON">Call of the Night</Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/JJK' element={<JJK />} />
          <Route exact path='/MHA' element={<MHA />} />
          <Route exact path='/CON' element={<CON />} />
        </Routes>
          </div>
          </Router>
  );
};

export default App;