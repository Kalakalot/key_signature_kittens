import React from 'react';
  function Result(props) {
    return (
      <div className="result">
        You got <strong>{props.correctAnswers}</strong> out of {props.totalQuestions} right!
      </div>
    );
  }

  export default Result;

  Result.propTypes = {
    // quizResult: React.PropTypes.string.isRequired,
  };
