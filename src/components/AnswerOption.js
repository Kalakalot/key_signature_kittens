import React from 'react';
import PropTypes from 'prop-types';
import './AnswerOption.css'

  function AnswerOption(props) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className={props.answerType === "incorrect" ? "radioCustomLabel answer__item--is-incorrect" : "radioCustomLabel answer__item--is-correct"} htmlFor={props.answerType}>
          {props.answerContent}
        </label>
        {console.log(props.answerType)}

      </li>
    );
  }

  export default AnswerOption;

  AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };