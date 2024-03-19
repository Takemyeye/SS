import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(() => {
    return JSON.parse(localStorage.getItem('isLeftPanelOpen')) || false;
  });

  const toggleLeftPanel = () => setIsLeftPanelOpen(!isLeftPanelOpen);

  useEffect(() => {
    localStorage.setItem('isLeftPanelOpen', JSON.stringify(isLeftPanelOpen));
  }, [isLeftPanelOpen]);

  return (
    <div>
      <button className="btn" onClick={toggleLeftPanel}>
        <span className="icon">
          <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#b4a9a9" rx="7"></rect>
            <rect y="30" width="80" height="15" fill="#b4a9a9" rx="7"></rect>
            <rect y="60" width="80" height="15" fill="#b4a9a9" rx="7"></rect>
          </svg>
        </span>
        <span className="text">MENU</span>
      </button>
        
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
  );
}