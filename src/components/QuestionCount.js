import React from 'react';
import PropTypes from 'prop-types';


  function QuestionCount(props) {
    return (
      <div className="questionCount">
        Question <strong>{props.counter}</strong> of {props.total}
      </div>
    );
  }

  export default QuestionCount;

  QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  };