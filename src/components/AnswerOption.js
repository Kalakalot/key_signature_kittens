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

        {/* ONLY HIGHLIGHTS INCORRECT ANSWERS AFTER SELECTION */}
        {/* <label 
          className={
            ((props.answerType === props.answer) === true) 
            &&
              (props.answerType === "incorrect")
              ? "radioCustomLabel answer__item--is-incorrect" : "radioCustomLabel"}
          htmlFor={props.answerType}>
          {props.answerContent}
        </label> */}

        <label 

          className={
            (((props.answerType === props.answer) === true) 
            
          &&
            
              ((props.answerType === "correct")
              ? "radioCustomLabel" : "radioCustomLabel answer__item--is-incorrect" ))
            
              ||

              ((props.answerType === "incorrect")
              ? "radioCustomLabel" : "radioCustomLabel answer__item--is-correct" )
          
            }
              
          htmlFor={props.answerType}>
          {props.answerContent}
        </label>

        {/* SHOWS CORRECT/INCORRECT ANSWER STYLE BEFORE ANSWER SELECTION */}
        {/* <label 
            className={props.answerType === "incorrect" ? "radioCustomLabel answer__item--is-incorrect" : "radioCustomLabel answer__item--is-correct"} 
            htmlFor={props.answerType}>
          {props.answerContent}
        </label> */}

        {/* WORKS CORRECTLY ONLY IF USER SELECTS RIGHT ANSWER */}
          {/* <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label> */}

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