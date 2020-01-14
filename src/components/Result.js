import React from 'react';
import PropTypes from 'prop-types';


  function Result(props) {
    return (
      <div className="result">
        You got <strong>{props.correctAnswers}</strong> out of {props.totalQuestions} right!
      </div>
    );
  }

  export default Result;

  Result.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired
  };
