import React from 'react';
import PropTypes from 'prop-types';

const AnswerExplanation = (props) => {
  return (
    <section className="explanation_container">
    <div className="explanation">
      <p> {props.explanation} </p>
    </div>
    <div className="explanation_image">
    <img src={props.image}/>
    </div>
    </section>
    );
  }

export default AnswerExplanation;