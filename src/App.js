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
    questionId: 1,
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

  // componentWillMount() {
  //   const shuffledAnswerOptions = this.state.quiz.map((element) => this.shuffleArray(element.answer_options));  
  //   this.setState({
  //     answerOptions: shuffledAnswerOptions[0]
  //   });
  // }

  // shuffleArray(array) {
  //   let currentIndex = array.length, temporaryValue, randomIndex;
  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //   return array;
  // };

  render() {
    console.log(quizData);

    return (
      <div className="App">
        <div className="App-header">
          <h1>key signature kittens</h1>
          <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
          <Sprites/>
        </div>
        <p>{quizData[0]["key_signature"]}</p>
        {/* <Questions allQuestions={this.state.quiz} hello="hello"/> */}
      </div>
    )
  }
}

export default App;
