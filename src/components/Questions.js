import React from 'react';
//import Question from './Question'
//import PropTypes from 'prop-types';

const Questions = ({allQuestions, hello}) => {

  

  const makeQuestions = () => {
    
    console.log(hello)
    const questionCollection = (allQuestions).map((question, i) => {
    return(
      <p>question</p>
      )
      }
    )
    return questionCollection
    }

  return (
    makeQuestions()
  )
}
    
    

export default Questions;

//Questions.propTypes = {
//  allQuestions: PropTypes.array,
//};