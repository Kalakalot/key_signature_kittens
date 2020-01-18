import React, { Component } from 'react';
import './AnswerExplanationPopup.css';  
import PropTypes from 'prop-types';

class AnswerExplanationPopup extends Component {  

  render() {  

    return (  
    <div className='popup'>  
    <div className='popup\_inner'>   
    <p className='explanation_text'>{this.props.explanation}</p>
    <img src={this.props.image} alt="key signature diagram"/>
    <button onClick={this.props.closePopup}>Hide Explanation</button>  
    </div>  
    </div>  
    );
  }  
}  

export default AnswerExplanationPopup;

AnswerExplanationPopup.propTypes = {
  explanation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  closePopup: PropTypes.func,
};