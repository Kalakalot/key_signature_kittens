import React from 'react';
import PropTypes from 'prop-types';


  function Question(props) {
    return (
      <div>
        {/* <h2 className="question">{props.content}</h2> */}
        <h2 className="which-key">What key signature is this?</h2>
        <img src={props.treble_url} alt={props.alt}/>
      </div>
    );
  }

  export default Question;

  Question.propTypes = {
    treble_url: PropTypes.string.isRequired,
    bass_url: PropTypes.string.isRequired
  };
