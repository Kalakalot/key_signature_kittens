import React, { Component } from 'react';
import quizData from './components/quizData'
import './App.css';
import axios from 'axios';
import Sprites from './components/Sprites';
import Quiz from './components/Quiz';
import Question from './components/Question';
import Result from './components/Result';
import update from 'react-addons-update';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1, 
      question: '',
      alt: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        correct: 0,
        incorrect: 0,
      },
      kittensEarned: 0,
      result: '',
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // lifecycle-based mapping of quiz answer options code from https://medium.com/@joshuaaguilar20/create-a-quiz-with-react-6bd826c04f6
  UNSAFE_componentWillMount() {
    const shuffledAnswerOptions = quizData.map((question) => this.shuffleArray(question.answers));  
    this.setState({
      question: quizData[0].question,
      alt: quizData[0].alt,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  // shuffle code from https://medium.com/@joshuaaguilar20/create-a-quiz-with-react-6bd826c04f6 (may n ot be original source; I\'ve seen this exact code including notes elsewhere)
  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
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

// Code used to pull data from external MongoDB database

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

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizData[counter].question,
      answerOptions: quizData[counter].answers,
      answer: ''
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    // adds short pause before advancing to next question
    if (this.state.questionId < quizData.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  // renderQuiz() {
  //   return (
  //     <Quiz
  //       answer={this.state.answer}
  //       answerOptions={this.state.answerOptions}
  //       questionId={this.state.questionId}
  //       question={this.state.question}
  //       questionTotal={quizData.length}
  //       onAnswerSelected={this.handleAnswerSelected}
  //     />
  //   );
  // }

  // renderResult() {
  //   return (
  //     <Result quizResult={this.state.result} />
  //   );
  // }


  render() {

    // {this.state.result ? this.renderResult() : this.renderQuiz()};

    return (
      <div className="App">
        <div className="App-header">
        <h1>key signature kittens</h1>
        <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
        <Sprites/>
        </div>
        <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        alt={this.state.alt}
        questionTotal={quizData.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
      </div>
    );         
  };
}

export default App;