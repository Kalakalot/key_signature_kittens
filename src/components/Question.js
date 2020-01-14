import React from 'react';
import PropTypes from 'prop-types';

  function Question(props) {
    
    return (
      <div>
        <h2 className="question">What key signature is this?</h2>
        <img src={props.question} alt={props.alt}/>
      </div>
    );
  }

  export default Question;

  Question.propTypes = {
    question: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };
