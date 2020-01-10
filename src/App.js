import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Sprites from './components/Sprites';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // initial_visit: true,
    }
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/')
    .then((response) => {
      let quizDatabase = response.data.map((quizDataSet) => {
        return quizDataSet;
      });

      this.setState({ 
        quiz: quizDatabase,
        error: '' 
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    console.log(this.state.quiz);

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
