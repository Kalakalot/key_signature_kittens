import React, { Component } from 'react';
import './AnswerExplanationPopup.css';  
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class AnswerExplanationPopup extends Component {  

  render() {  

    return (  
    <div className='popup'>  
    <div className='popup\_inner'>  
    <div className='explanation_container'>
    <img src={this.props.image} alt="key signature diagram"/>
    <p className='explanation_text'>{this.props.explanation}</p>
    </div>  
    <div className="button">
    <Button variant="outline-dark" onClick={this.props.closePopup}>BACK TO QUIZ</Button>  
    </div>
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