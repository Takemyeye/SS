import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Preloader from './Preloader'; // прелоадер

const MyComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

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

  return (
    <>
      {loading ? <Preloader /> : (
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
          <div className="title"><Link to="/">SoulSwap</Link>
          </div>
        </header>

        <div className="block-text">
        <h1 className="conteiner">
            <span className="Text-span">Что вы найдете здесь?</span>
        </h1>
        <h1 id="changingPhrase">{text}</h1>
    </div>
    </div>
      )}
    </>
  );
};

export default MyComponent;