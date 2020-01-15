import React, { Component } from 'react';
import quizData from './data/quizData'
import './App.css';
import axios from 'axios';
import Sprites from './components/Sprites';
import Quiz from './components/Quiz';
import Result from './components/Result';
import update from 'react-addons-update';

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
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  
  componentDidMount() {
    const shuffledAnswerOptions = quizData.map((question) => this.shuffle(question.answers));  
    
    // const shuffledQuestions = quizData.map((question) => this.shuffleArray(question));  
    this.setState({
      question: quizData[0].question,
      alt: quizData[0].alt,
      answerOptions: shuffledAnswerOptions[0],
      kittenValue: quizData[0].kitten_value
      // question: shuffledQuestions[0].question,
      // alt: shuffledQuestions[0].alt,
      // kittenValue: shuffledQuestions[0].kitten_value,
    });
  }
  

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

    // shuffle code based on Fisher-Yates-Durstenfeld algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
  shuffle(object) {
    let currentIndex = object.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = object[currentIndex];
      object[currentIndex] = object[randomIndex];
      object[randomIndex] = temporaryValue;
    }
    return object;
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
      alt: quizData[counter].alt,
      kittenValue: quizData[counter].kitten_value,
      answer: ''
    });
  }
  
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    // add kitten value if answer is correct
    if (event.currentTarget.value === "correct") {
      this.setState({
        kittensEarned: (Number(this.state.kittensEarned) + Number(this.state.kittenValue))
          })
        }
    // adds short pause before advancing to next question or results
    if (this.state.questionId < quizData.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.renderResults(), 300);
    }
  }
  
  renderResults() {
    return (
      <Result correctAnswers={this.state.answersCount.correct} totalQuestions={quizData.length}/>
      );
    }
  
    renderQuiz() {
      return (
        <>
        <Quiz
        alt={this.state.alt}
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        kittenValue={this.state.kittenValue}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizData.length}
        onAnswerSelected={this.handleAnswerSelected}
        />
        </>
        );
      }
      
      renderResult() {
        return (
          <Result correctAnswers={this.state.answersCount.correct} totalQuestions={quizData.length}/>
          );
        }
        
        render() {
          console.log(this.state.answer); 
          console.log(`this.state.kittenValue: ${this.state.kittenValue}`);
          console.log(`this.state.kittensEarned: ${this.state.kittensEarned}`);
          
          return (
            <div className="App">
            <div className="App-header">
            <h1>key signature kittens</h1>
            <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
            <Sprites/>
            </div>
            
            <section className="kittens_earned">
              <h2 className="score">Kittens Earned: {this.state.kittensEarned}</h2>
            </section>
            {this.state.answersCount.correct + this.state.answersCount.incorrect === quizData.length ? this.renderResults() : this.renderQuiz()};
            </div>
            );         
          }; 
        }
        
        export default App;