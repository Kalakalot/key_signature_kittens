import React from 'react';
import PropTypes from 'prop-types';

const AnswerExplanation = (props) => {
  return (
    <div>
      <p>Here's the explanation: {props.explanation}</p>
    </div>
    // <div className="explanation">
    //   You got <strong>{props.explanation}</strong> out of right!
    // </div>
    );
  }

export default AnswerExplanation;