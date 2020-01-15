import React from 'react';
import PropTypes from 'prop-types';


  const Result = (props) => {
    return (
      <div className="result">
        <p>
        You got <strong>{props.correctAnswers}</strong> out of {props.totalQuestions} right!
        </p>
        <button onClick={() => window.location.reload(false)}>Take the quiz again</button>
      </div>
    );
  }

  export default Result;

  Result.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired
  };
