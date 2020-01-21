import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';

  function Question(props) {
    
    return (
      <div>
        <h2 className="question">What key signature is this?</h2>
        <img src={props.question} alt={props.alt} className='questionImage'/>
      </div>
    );
  }

  export default Question;

  Question.propTypes = {
    question: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };
