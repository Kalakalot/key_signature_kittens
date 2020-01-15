import React, { Component } from 'react';
import './Popup.css';  

class Popup extends Component {  

  render() {  

return (  
<div className='popup'>  
<div className='popup\_inner'>   
<p className='explanation_text'>{this.props.explanation}</p>
<img src={this.props.image}/>
<button onClick={this.props.closePopup}>Back to Quiz</button>  
</div>  
</div>  
);  
}  
}  

export default Popup;