import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
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
      <div className="title"><Link to="/home">SoulSwap</Link></div>
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
  );
};

export default Header;