import React from 'react';
import './KittensEarned.css';
import PropTypes from 'prop-types';

const KittensEarned = (props) => {
    
  return (
    <section className="kittens_earned">
          <h2 className="score">
            Kittens Earned: {props.kittensEarned}</h2>
    </section>
  );
}

export default KittensEarned;

KittensEarned.propTypes = {
  kittensEarned: PropTypes.number.isRequired
};