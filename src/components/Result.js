import React from 'react';
import './Result.css';
import Kittens from './Kittens'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';



  const Result = (props) => {
    
    return (
      <>
      <div className="result">
      <br/>
        <p>
        You got <strong>{props.correctAnswers}</strong> out of <strong>{props.totalQuestions}</strong> right! Here are your kittens ...
        </p>
        <Kittens kittensEarned={props.kittensEarned}/>
        <br/>
        <div className="button__try-again">
        <Button variant="outline-dark" onClick={() => window.location.reload(false)} margin="auto">PLAY AGAIN</Button>
        </div>
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
