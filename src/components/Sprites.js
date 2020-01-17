import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import './Sprites.css';
import cat_sprite from '../assets/cat_white-32x32.png'

const Sprites = () => {
  return (
    <div className="cat-walking-container">
    <Spritesheet
      className={`cat-walking__white--right`}
      image={cat_sprite}
      widthFrame={32}
      heightFrame={32}
      steps={3}
      fps={3}
      loop={true}
      autoplay={true}
      startAt={1}
    />
      <Spritesheet
      className={`cat-walking__white--right`}
      image={cat_sprite}
      widthFrame={32}
      heightFrame={32}
      steps={3}
      fps={8}
      loop={true}
      autoplay={true}
      startAt={2}
    />
      <Spritesheet
      className={`cat-walking__white--right`}
      image={cat_sprite}
      widthFrame={32}
      heightFrame={32}
      steps={3}
      fps={12}
      loop={true}
      autoplay={true}
      startAt={1}
    />
    </div>
  );
}

export default Sprites;