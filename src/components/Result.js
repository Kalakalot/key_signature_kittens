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
        You got <strong>{props.correctAnswers}</strong> out of <strong>{props.totalQuestions}</strong> right! Here are your kittens ...
        </p>
        <Kittens kittensEarned={props.kittensEarned}/>
      </div>
      </>
    );
  }

  export default Result;

  Result.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    kittensEarned: PropTypes.number.isRequired,
  };
