import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      correct_answers: null,
      incorrect_answers: null,
    }
  };
  render() {

  return (
    <div className="App">
      <div className="App-header">
        <h1>key signature kittens</h1>
        <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
        <Sprites/>
      </div>
    </div>
  );
}
}

export default Quiz;

Quiz.propTypes = {
  correct_answers: PropTypes.number,
  incorrect_answers: PropTypes.number,
}