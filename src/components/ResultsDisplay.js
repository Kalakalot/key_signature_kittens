import React from 'react';
import './Result.css';
import Kittens from './Kittens'
import Result from './Result'
import PropTypes from 'prop-types';


  const ResultsDisplay = (props) => {
    
    return (
      <>
      <Kittens kittensEarned={props.kittensEarned} />
      <Result correctAnswers={props.correctAnswers} totalQuestions={props.totalQuestions} 
      />
      </>
    );
  }

  export default ResultsDisplay;

  Result.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired
  };
