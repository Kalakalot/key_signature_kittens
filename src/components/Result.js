import React from 'react';
import './Result.css';
import Kittens from './Kittens'
import PropTypes from 'prop-types';


  const Result = (props) => {
    
    return (
      <>
      <div className="result">
        <button onClick={() => window.location.reload(false)}>Try again</button>
        <p>
        You got <strong>{props.correctAnswers}</strong> out of <strong>{props.totalQuestions}</strong> right!
        </p>
      </div>
      <Kittens kittensEarned={props.kittensEarned} />
      </>
    );
  }

  export default Result;

  Result.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired
  };
