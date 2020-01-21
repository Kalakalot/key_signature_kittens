import React from 'react';
import PropTypes from 'prop-types';
import kittenImage from '../assets/single_cat.png';
import './Kitten.css'

const Kitten = () => {
  return (
    <div className="kittenImage">
    <img src={kittenImage} alt="kitten"/>
    </div>
  );
}

export default Kitten;

Kitten.propTypes = {
  kittenImage: PropTypes.string.isRequired
};
