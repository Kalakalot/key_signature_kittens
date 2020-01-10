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
    questionID: 1, 
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

  componentWillMount() {
    const shuffledAnswerOptions = quizData.map((question) => this.shuffleArray(question.answer_options));  
    this.setState({
      question: quizData[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }


  // shuffle code from https://medium.com/@joshuaaguilar20/create-a-quiz-with-react-6bd826c04f6
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

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
    console.log(this.state.answerOptions);


    return (
      <div className="App">
        <div className="App-header">
          <h1>key signature kittens</h1>
          <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
          <Sprites/>
        </div>
        <Questions allQuestions={quizData}/>
      </div>
    )
  }
}

export default App;
