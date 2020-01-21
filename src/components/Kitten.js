import React from 'react';
import forwardKitten from '../assets/cat_walking_forward.png';
import './Kitten.css';
import Spritesheet from 'react-responsive-spritesheet';

const Kitten = () => {
  return (
  
    <Spritesheet
    image={forwardKitten}
    widthFrame={32}
    heightFrame={32}
    steps={3}
    fps={3}
    loop={true}
    autoplay={true}
    startAt={1}
  />
  );
}

export default Kitten;
