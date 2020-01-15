import React, { Component } from 'react';
import './Popup.css';  

class Popup extends Component {  

  render() {  

return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
<button onClick={this.props.closePopup}>Back to Quiz</button>  
</div>  
</div>  
);  
}  
}  

export default Popup;