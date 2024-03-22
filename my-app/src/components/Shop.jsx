import React, { useState, useEffect } from 'react';
import Header from './component/TopPanel';

const Shop = () => {
  const images = ['JJK1-min.JPG', 'JJK2-min.JPG', 
  'JJK3-min.JPG', 'JJK4-min.JPG', 'JJK5-min.JPG', 
  'JJK6-min.JPG', 'JJK7-min.JPG', 'JJK8-min.JPG', 
  'JJK9-min.JPG', 'JJK10-min.JPG', 'JJK11-min.JPG', 
  'JJK12-min.JPG', 'JJK13-min.JPG','MHA1-min.JPG',
  'CON1-min.JPG', 'CON2-min.JPG', 'CON3-min.JPG'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const textsToIterate = [
    'text1','text2','text3','text4'
  ];
  const interval = 100;
  let changeInterval = 1000;

  useEffect(() => {
    let index = 0;
    const textLength = textsToIterate[textIndex].length;

    const displayTextInterval = setInterval(() => {
      if (index < textLength) {
        setDisplayText((prevText) => prevText + textsToIterate[textIndex].charAt(index));
        index++;
      } else {
        clearInterval(displayTextInterval);

        setTimeout(() => {
          let removeIndex = textLength - 1;
          const removeTextInterval = setInterval(() => {
            if (removeIndex >= 0) {
              setDisplayText((prevText) => prevText.slice(0, -1));
              removeIndex--;
            } else {
              clearInterval(removeTextInterval);
              setTextIndex((prevIndex) => (prevIndex + 1) % textsToIterate.length);
              setDisplayText('');
              changeInterval = 1000;
            }
          }, interval);
        }, changeInterval);
      }
    }, interval);

    return () => clearInterval(displayTextInterval);
  }, [textIndex]);

  useEffect(() => {
    setDisplayText(textsToIterate[textIndex].charAt(0));
  }, [textIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="background">
      <Header />
      <div className='Main'>
        <div className='Shop-Art'>ART</div>
        <div className='Shop-Right'>
          <div className='Shop-Text'>
            <span>Information</span>
          </div>
          <div className='Shop-Description'>
            Description
          </div>
          <div className='Shop-Buy'>
            <div className='background-price-Shop'>
              <p className='price'>Price</p>
            </div>
            <div className='background-Fa-Shop-Shop'>
              <div className='Fa-Shop-Shop'> 
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Right-About-Us'>
        <div className='scrol-text'>
          <div className='Text-scrolColor'>
            <div className='Title-Text-Scrol'>
                Любимцы публики
              </div>
                <div className='blockDinamicText'>
                  <div className='dinamicText'>{displayText}</div>
                </div>
              </div>
            </div>
          <div className='Animation-Infinite'>
            <span className='row1'>-</span>
            <span className='row2'>-</span>
        </div>
        <div className='Image-scroll'>
          <img src={images[currentIndex]} alt="" className="active" />
        </div>
      </div>
    </div>
  );
};

export default Shop;