import React from 'react';
import PropTypes from 'prop-types';

  const Question = (props) => {
    
    console.log(props)

    return (
      <div>
        <h2 className="question">What key signature is this?</h2>
        <img src={props.trebleURL} alt={props.alt}/>
        <p>{props.answerOptions}</p>
      </div>
    );
  }

  export default Question;

  Question.propTypes = {
    // treble_url: PropTypes.string.isRequired,
    // bass_url: PropTypes.string.isRequired
  };
