import React from 'react'; 
import Question from './Question'; 
// import QuestionCount from './QuestionCount'; 
import AnswerOption from './AnswerOption';
// import PropTypes from 'prop-types';

const Quiz = (props) => {
  return (
    <div className="quiz">
      {/* <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      /> */}
      <Question
          // key={i}
          // keySignature={props.key_signature}
          // trebleURL={props.treble_url}
          // alt={props.alt}
          // answerOptions={question["answer_options"]}
          // answerExplanation={question["answer_explanation"]}
          />
      <ul className="answerOptions">
        {/* {props.answerOptions.map(renderAnswerOptions)} */}
      </ul>
    </div>
  );
}

export default Quiz;

Quiz.propTypes = {
  // answer: PropTypes.string.isRequired,
  // answerOptions: PropTypes.array.isRequired,
  // counter: PropTypes.number.isRequired,
  // question: PropTypes.string.isRequired,
  // questionId: PropTypes.number.isRequired,
  // questionTotal: PropTypes.number.isRequired,
  // onAnswerSelected: PropTypes.func.isRequired
};