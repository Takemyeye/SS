import React, { useState, useEffect } from 'react';
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
        <div className="block-text">
        <h1 className="conteiner">
            <span className="Text-span">Что вы найдете здесь?</span>
        </h1>
        <h1 id="changingPhrase">{text}</h1>
    </div>
        
      )}
    </>
  );
};

export default MyComponent;