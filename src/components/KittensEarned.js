import React from 'react';
import './KittensEarned.css';
import PropTypes from 'prop-types';

const KittensEarned = (props) => {
    
  return (
    <section className="kittens_earned">
          <h3 className="score">
            <strong> KITTENS EARNED: {props.kittensEarned}</strong></h3>
    </section>
  );
}

export default KittensEarned;

KittensEarned.propTypes = {
  kittensEarned: PropTypes.number.isRequired
};