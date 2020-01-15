import React from 'react';
import PropTypes from 'prop-types';

const AnswerExplanation = (props) => {
  return (
    <section className="explanation_container">
    <div className="explanation">
      <p> {props.explanation} </p>
    </div>
    <div className="explanation_image">
    <img src={props.image} alt="diagram of key signature"/>
    </div>
    </section>
    );
  }

export default AnswerExplanation;

AnswerExplanation.propTypes = {
  explanation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}