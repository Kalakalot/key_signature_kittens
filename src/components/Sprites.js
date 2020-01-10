import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import './Sprites.css';
import PropTypes from 'prop-types';

const Sprites = () => {
  return (
    <div className="cat-walking-container">
    <Spritesheet
      className={`cat-walking__white--right`}
      image={`https://lh3.googleusercontent.com/ITV4yB0J4h5CYQpwahnfgjDI5OCeOdoP3_3BJ1G-GzhfY0N3Gp2f--ROGt1SeRqvAut4QPbJcVjyu3EDR7Hbxagp7wNMwLFfoYqah2mf51Kf_s35yztb0cRSM2_Jp-xXE2rvn2DYBVoK3t2X01yfTm7A75YBWo19RTOz6KF_xFL4swHqrvwK6JTl2wGX0yy9yT_VovYk1y5hGtt6c1KZvFXlKV-UNNzFdu6VxyBqQW9bKewykx3wgrEaEusOwArArKARQzFFkoPyOlXkLHNzdHEDf0BXXggx_mhGF-gF4B5qOqNficnNNo3vNqqR7DUzrYqy4nZD31R5JQVi-lTGG4SF-_DTZydvfQZ2SouYAG4Ocov3Rl6xsucHUCBiujKDl3ZPYMfHwJa8PEQ1tdW0UBB0E6WS5WMCTVO_AxD6pNvH1asRHbuV3Ae68LzLF6jxIN-muBXaxeeqyKCE6agM754GBtpo1DqDvBvFToBmhVOWefIlqLJVwMmVwhQxwRgJgtRSpIhe0gI1zo1HlFpsRDow7THo9Ew0BAyZrKUT5N_U4xowj_46TrQfJQeBC3-WQsVB501csU9WBa7htRAVd6wSXTYzSfe55xNbBOiVPLB0_rqAFUAfHlqAZAtJX7rSD0T_NuNVaLSDv-ppoZ3qh43agZ327F4p5Xhp5R8lBwoCkAb3IgFa2w=w96-h33-no`}
      widthFrame={32}
      heightFrame={32}
      steps={3}
      fps={3}
      loop={true}
      autoplay={true}
    />
      <Spritesheet
      className={`cat-walking__white--right`}
      image={`https://lh3.googleusercontent.com/ITV4yB0J4h5CYQpwahnfgjDI5OCeOdoP3_3BJ1G-GzhfY0N3Gp2f--ROGt1SeRqvAut4QPbJcVjyu3EDR7Hbxagp7wNMwLFfoYqah2mf51Kf_s35yztb0cRSM2_Jp-xXE2rvn2DYBVoK3t2X01yfTm7A75YBWo19RTOz6KF_xFL4swHqrvwK6JTl2wGX0yy9yT_VovYk1y5hGtt6c1KZvFXlKV-UNNzFdu6VxyBqQW9bKewykx3wgrEaEusOwArArKARQzFFkoPyOlXkLHNzdHEDf0BXXggx_mhGF-gF4B5qOqNficnNNo3vNqqR7DUzrYqy4nZD31R5JQVi-lTGG4SF-_DTZydvfQZ2SouYAG4Ocov3Rl6xsucHUCBiujKDl3ZPYMfHwJa8PEQ1tdW0UBB0E6WS5WMCTVO_AxD6pNvH1asRHbuV3Ae68LzLF6jxIN-muBXaxeeqyKCE6agM754GBtpo1DqDvBvFToBmhVOWefIlqLJVwMmVwhQxwRgJgtRSpIhe0gI1zo1HlFpsRDow7THo9Ew0BAyZrKUT5N_U4xowj_46TrQfJQeBC3-WQsVB501csU9WBa7htRAVd6wSXTYzSfe55xNbBOiVPLB0_rqAFUAfHlqAZAtJX7rSD0T_NuNVaLSDv-ppoZ3qh43agZ327F4p5Xhp5R8lBwoCkAb3IgFa2w=w96-h33-no`}
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
      image={`https://lh3.googleusercontent.com/ITV4yB0J4h5CYQpwahnfgjDI5OCeOdoP3_3BJ1G-GzhfY0N3Gp2f--ROGt1SeRqvAut4QPbJcVjyu3EDR7Hbxagp7wNMwLFfoYqah2mf51Kf_s35yztb0cRSM2_Jp-xXE2rvn2DYBVoK3t2X01yfTm7A75YBWo19RTOz6KF_xFL4swHqrvwK6JTl2wGX0yy9yT_VovYk1y5hGtt6c1KZvFXlKV-UNNzFdu6VxyBqQW9bKewykx3wgrEaEusOwArArKARQzFFkoPyOlXkLHNzdHEDf0BXXggx_mhGF-gF4B5qOqNficnNNo3vNqqR7DUzrYqy4nZD31R5JQVi-lTGG4SF-_DTZydvfQZ2SouYAG4Ocov3Rl6xsucHUCBiujKDl3ZPYMfHwJa8PEQ1tdW0UBB0E6WS5WMCTVO_AxD6pNvH1asRHbuV3Ae68LzLF6jxIN-muBXaxeeqyKCE6agM754GBtpo1DqDvBvFToBmhVOWefIlqLJVwMmVwhQxwRgJgtRSpIhe0gI1zo1HlFpsRDow7THo9Ew0BAyZrKUT5N_U4xowj_46TrQfJQeBC3-WQsVB501csU9WBa7htRAVd6wSXTYzSfe55xNbBOiVPLB0_rqAFUAfHlqAZAtJX7rSD0T_NuNVaLSDv-ppoZ3qh43agZ327F4p5Xhp5R8lBwoCkAb3IgFa2w=w96-h33-no`}
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