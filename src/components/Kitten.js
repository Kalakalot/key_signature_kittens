import React from 'react';
import PropTypes from 'prop-types';
import kittenImage from '../assets/cat_white-32x32.png'

const Kitten = () => {
  return (
    <img src={kittenImage} alt="kitten" />
  );
}

export default Kitten;

Kitten.propTypes = {
  kittenImage: PropTypes.string.isRequired
};
