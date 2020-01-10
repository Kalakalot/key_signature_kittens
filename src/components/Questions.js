import React from 'react';
import Question from './Question';
//import Question from './Question'
//import PropTypes from 'prop-types';

const Questions = (props) => {
  // to display key signature for first element
  console.log(props.allQuestions[0]["key_signature"])
  const questionCollection = props.allQuestions
  console.log(questionCollection[1]["key_signature"])

  return (
    <div>
    {(questionCollection).map((question, i) => {
      return(
        <Question
          keySignature={question["key_signature"]}
          trebleURL={question["treble_url"]}
          alt={question["alt"]}
          answerOptions={question["answer_options"]}
          answerExplanation={question["answer_explanation"]}
          />
      )
    })}
    </div>
  )
}

export default Questions;
