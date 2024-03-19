import React,{useEffect, useState} from "react";

export default function DinamicText ()  {
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


  return (
    <div className='blockDinamicText'>
      <div className='dinamicText'>{displayText}</div>
      </div>
  )
}