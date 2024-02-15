"use client";
import { useState } from "react";

import IMG_4215 from './IMG_4215.jpeg';
import buns from './buns.jpeg';
import cabin from './cabin.jpeg';
import ski from './ski.jpeg';
import xmas from './xmas.jpeg';
//import IMG_4316 from './IMG_4316.JPG';
import Pride from "react-canvas-confetti/dist/presets/fireworks";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

function confetti_display() {
  return <Fireworks autorun={{speed:3, duration:100}}/>;

};

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  //const [yesPressed, setYesPressed] = useState(false);
  const [yesPressed, setYesPressed] = useState(0);
  const [imageSrc, setImageSrc] = useState('https://gifdb.com/images/high/cute-cartoon-bunny-love-xnmn7vwvvyafe0vk.gif');
  //const [finalClick] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  //const yesCount = yesPressed;
  //const [isVisible, setIsVisible] = useState(false);
  const [yesBunny, setBunny] = useState(0);
  let text = 'some bunny loves you';
  const text_input = [
    'WILL U BE MY VALENTINE?', 'REALLY??', 'ARE U BUNNY SURE?', 'SOME BUNNY LOVES YOU, DO U LOVE THAT BUNS?',
    'I LOVE YOU', 'HAPPY V-DAY BABYYY!'
  ];
  let input_text = text_input[yesPressed];
  const text2 = ['HAPPY V-DAY BABYYY!', 'I LOVE YOU TOO', 'hehe u keep clicking me', 'i wuv u x infinity buns'];
  let text_2 = text2[yesBunny];

  const handleSetBunny = () => {
    setBunny(yesBunny +1);


  };
  // function confetti_display() {
  //   return <Fireworks autorun={{speed:3, duration:100}}/>;

  // };
  
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  const handleYesClick = () => {
    setYesPressed(yesPressed + 1);
    // if (yesPressed === 0) {
    //   setImageSrc('https://tenor.com/7A9g.gif');

    // } 
    if (yesPressed === 1) {
      setImageSrc("https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif");

    } 
    if (yesPressed === 2) {
      setImageSrc(IMG_4215);
    }
    if (yesPressed === 3) {
      setImageSrc('https://gifdb.com/images/high/cute-cartoon-bunny-love-xnmn7vwvvyafe0vk.gif');

    }
    if (yesPressed === 4) {
      setImageSrc('https://tenor.com/bv5XY.gif');
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please bundaddy",
      "PLEASE POOKIE",
      'buns will cry',
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  const getYesButtonText = () => {
    const phrases = [
      "Yes",
      "YES! I love you", 
      "YOU'RE SILLY",
      "I love buns", 
      "I love our bunny fam", 
      "YAY! I want to be your valentine"
    ];

    return phrases[Math.min(yesPressed, phrases.length - 1)];
  };

  if(yesBunny ==3){
    return ( 
      <div className="grid grid-cols-4 gap-1 place-items-center justify-items-center h-56">
       < Fireworks autorun={{speed:3, duration:100}}/>
          <div>
            <img className="object-contain h-120 w-80" src = {buns}/>
          </div>
          <div>
            <img className="object-contain h-120 w-80" src = {ski}/>
          </div>
          <div>
            <img className="object-contain h-120 w-80" src = {cabin}/>
          </div>
          <div>
            <img className="object-contain h-120 w-80" src = {xmas}/>
          </div>
          <div className = "ml-10 mr-10 col-start-1 col-end-4">

          
          <blockquote>
            <p className=" ml-10 px-4 py-2 text-lg font-medium text-blue-600">
              Happy V-day baby. I love you so much. Thank you for everything you do for me. 

            </p>
            <p className= 'ml-10 px-4 py-2 text-lg font-medium text-blue-600'>
              Thank you for growing as a person with me and trying hard. You are so cute and I love you so so so much baby🐰 
              I can't wait to make more memories with you!
              I can't wait for summers on the island and at your cotty, sunsets, wood fires, hottubbing by the ocean and watching the orcas. Life is more magical with you!♥️
            </p>
          </blockquote>
          </div>
      
      
      </div>
      
    );
  }
  

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {
      yesPressed === 5 ? (
        <>
          <Pride autorun={{ speed: 2, duration: 10000}} />
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <button 
          className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
          onClick={handleSetBunny}>I love u baby</button>
          
          <div className="my-4 text-4xl font-bold"> {text_2} ;))</div>
          
        </>
      ) :(
        <>
          <img
            className="h-[200px]"
            src={imageSrc}
          />
          <h1 className="my-4 text-4xl">{input_text}</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              {yesPressed === 0 ? "Yes" : getYesButtonText()}
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href=""
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️ Bun Bun
      </span>
    </a>
  );
};


