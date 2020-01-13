import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions'

  const Question = (props) => {
    
    return (
      <div>
        <h2 className="question">What key signature is this?</h2>
        <img src={props.trebleURL} alt={props.alt}/>
      </div>
    );
  }

  export default Question;

  Question.propTypes = {
    trebleURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };
