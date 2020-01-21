import React from 'react'; 
import Question from './Question';
import QuestionCount from './QuestionCount'; 
import AnswerOption from './AnswerOption';
import './Quiz.css'
import PropTypes from 'prop-types';

const Quiz = (props) => {

  function renderAnswerOptions(key) {
    return (
      <p> 
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
      </p> 
    );
  }


  return (
    <>
    <div className="quiz">
      <p> 
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <div className="questionContainer">
        <Question question={props.question} alt={props.alt}/>
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
      </p>
    </div>
  </>
  );
}

export default Quiz;

Quiz.propTypes = {
  alt: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};