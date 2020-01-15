import React, { Component } from 'react';
import quizData from './data/quizData'
import './App.css';
import axios from 'axios';
import Sprites from './components/Sprites';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Popup from './components/AnswerExplanationPopup';  
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
      answerExplanation: '',
      answerURL: '',
      showPopup: false,
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizData.map((question) => this.shuffle(question.answers));  
    
    // const shuffledQuestions = quizData.map((question) => this.shuffle(question));  

    this.setState({
      question: quizData[0].question,
      alt: quizData[0].alt,
      kittenValue: quizData[0].kitten_value,
      answerExplanation: quizData[0].answer_explanation,
      answerURL: quizData[0].explanation_url,
      answerOptions: shuffledAnswerOptions[0],
      // question: shuffledQuestions[0].question,
      // alt: shuffledQuestions[0].alt,
      // kittenValue: shuffledQuestions[0].kitten_value,
    });
  }

  
  // componentDidMount() {
  //   const shuffledQuestions = quizData.map((question) => this.shuffle(question));  

  //   this.setState({
  //     question: shuffledQuestions[0].question,
  //     alt: shuffledQuestions[0].alt,
  //     kittenValue: shuffledQuestions[0].kitten_value,
  //   });
  // }


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
      answer: '',
      answerExplanation: quizData[Number(counter) - 1].answer_explanation,
      answerURL: quizData[Number(counter) - 1].explanation_url,
    });
  }
  
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    // add kitten value if answer is correct
    if (event.currentTarget.value === "correct") {
      this.setState({
        kittensEarned: (Number(this.state.kittensEarned) + Number(this.state.kittenValue))
          })

    // adds short pause before advancing to next question or results
      if (this.state.questionId < quizData.length) {
        setTimeout(() => this.setNextQuestion(), 500);
      } else {
        setTimeout(() => this.renderResults(), 500);
      }
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
      {/* <AnswerExplanation explanation={this.state.answerExplanation} image={this.state.answerURL}/> */}
      </>
      );
  }

  // popup code and basic styling gratefully adapted from https://dev.to/skptricks/create-simple-popup-example-in-react-application-5g7f
  togglePopup() {  
    this.setState({  
      showPopup: !this.state.showPopup  
    });  }
              
    render() {
      console.log(`this.state.answerExplanation: ${this.state.answerExplanation}`);
      console.log(`this.state.answerURL: ${this.state.answerURL}`);
      
      return (
        <>
        <div className="App">
        <div className="App-header">
        <h1>key signature kittens</h1>
        <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
        <Sprites/>
        </div>
        
        <section className="kittens_earned">
          <h2 className="score">Kittens Earned: {this.state.kittensEarned}</h2>
        </section>
        {this.state.answersCount.correct + this.state.answersCount.incorrect === quizData.length ? this.renderResults() : this.renderQuiz()}
        </div>

        {/* display answer explananation popup for second question and beyond */}
        <div> 
        {this.state.questionId > 1 ?  <button onClick={this.togglePopup.bind(this)}> View Previous Question's Answer Explanation</button> : null }    

        {this.state.showPopup ?  
        <Popup 
          explanation={this.state.answerExplanation} 
          image={this.state.answerURL}  
          closePopup={this.togglePopup.bind(this)}  
        />  
        : null  
        }  
        </div>  
        </>
        );         
      }; 
      
    }
      
export default App;