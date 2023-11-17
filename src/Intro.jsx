import React, { useState, useEffect } from 'react';

function Intro() {
  const [text, setText] = useState('');
  const words = ['student', 'Chai-Maker &', 'Artist', 'programmer', 'learner'];
  const phrases = words.map((word) => `Hey! I'm a passionate ${word}`);

  useEffect(() => {
    let index = 0;
    let currentPhrase = phrases[index];

    const intervalId = setInterval(() => {
      const wordsArray = currentPhrase.split(' ');
      const lastWord = wordsArray[wordsArray.length -1];

      if (lastWord !== words[index]) {
        wordsArray[wordsArray.length - 1] = words[index];
        currentPhrase = wordsArray.join(' ');
        setText(currentPhrase);
      } else {
        index += 1;

        if (index === words.length) {
          clearInterval(intervalId);
        }
      }
    }, 500); // Adjust the delay as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [phrases, words]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative bg-gray-100 p-4 rounded-md mb-4 sm:mb-8 lg:mb-12">
      <p className="text-5xl font-semibold font-serif text-blue-500 sm:text-2xl lg:text-3xl">
        {text}
      </p>
      <button
        className="ml-40 mt-10 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 mt-50"
        onClick={handleScrollDown}
      >
        Scroll Down
      </button>
      
    </div>
  );
}

export default Intro;
