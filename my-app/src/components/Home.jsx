import React, { useState, useEffect } from 'react';
import Header from './component/TopPanel';
import Menu from './component/LeftPanel';


const Home = () => {
  
  const [text, setText] = useState('Творчество, которое ты еще не видел!');

  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);

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
    <div className="background">

     <Header />
     <Menu setIsLeftPanelOpen={setIsLeftPanelOpen} isLeftPanelOpen={isLeftPanelOpen}/>

        </div>
        <div className='displayoff'>
        <div className="block-text">
        <h1 className="conteiner">
            <span className="Text-span">Что вы найдете здесь?</span>
        </h1>
        <div className='changingPhrase'>{text}</div>
    </div>
    </div>
    </>
  );
};

export default Home;