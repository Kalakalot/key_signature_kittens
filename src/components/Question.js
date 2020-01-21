import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';

  function Question(props) {

  const imageSize = {
    height: '300px',
  }
    
    return (
      <div>
        <img src={props.question} alt={props.alt} style={imageSize} className='questionImage'/>
      </div>
    );
  }

  export default Question;

  Question.propTypes = {
    question: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };
