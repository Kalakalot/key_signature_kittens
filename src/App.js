import React, { Component } from 'react';
import './App.css';
import Sprites from './components/Sprites';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // initial_visit: true,
    }
  };

  render() {

  return (
    <div className="App">
      <div className="App-header">
        <h1>key signature kittens</h1>
        <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
        <Sprites/>
      </div>
    </div>
  );
}
}

export default App;
