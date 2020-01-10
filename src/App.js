import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Sprites from './components/Sprites';
import Question from './components/Question';
import Questions from './components/Questions';
import quizData from './components/quizData';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    counter: 0,
    question: '',
    answerOptions: [],
    correct: null,
    answersCount: {
      correct: 0,
      incorrect: 0,
    },
    kittensEarned: 0,
    result: ''
    };
  }

  // componentWillMount() {
  //   const shuffledAnswerOptions = quizData.map((question) => this.shuffleArray(question.answers));  
  //   this.setState({
  //     question: quizData[0].question,
  //     answerOptions: shuffledAnswerOptions[0]
  //   });
  // }

  // componentDidMount() {
  //   axios.get('http://127.0.0.1:5000/')
  //   .then(
  //     (response) => {
  //     const quizDatabase = response.data.map((quizDataSet) => {
  //       return quizDataSet;
  //     });

  //     this.setState({ 
  //       quiz: quizDatabase,
  //       error: '' 
  //     });
  //   })
  //   .catch((error) => {
  //     this.setState({ error: error.message });
  //   });
  // }

 

  render() {
    console.log(quizData);

    return (
      <div className="App">
        <div className="App-header">
          <h1>key signature kittens</h1>
          <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
          <Sprites/>
        </div>
        {/* <p>{quizData[0]["key_signature"]}</p>
        <img src={quizData[0]["treble_url"]} alt={quizData[0]["alt"]}/> */}
        <Questions allQuestions={quizData}/>
      </div>
    )
  }
}

export default App;
