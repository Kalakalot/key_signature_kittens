import React, { Component } from 'react';
import quizData from './data/quizData'
import './App.css';
import axios from 'axios';
import Sprites from './components/Sprites';
import Quiz from './components/Quiz';
import ResultsDisplay from './components/ResultsDisplay';
import Popup from './components/AnswerExplanationPopup';  
import update from 'react-addons-update';

// structure based on Mitch Gavin's "Create a quiz with React" tutorial: https://mitchgavan.com/react-quiz/
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
      popupButtonText: 'View answer explanation for previous question'
    };
  }

  componentDidMount() {
    const shuffledQuestions = this.shuffle(quizData)
    const shuffledAnswerOptions = shuffledQuestions.map((question) => this.shuffle(question.answers));  

    this.setState({
      question: shuffledQuestions[0].question,
      alt: shuffledQuestions[0].alt,
      kittenValue: shuffledQuestions[0].kitten_value,
      answerExplanation: shuffledQuestions[0].answer_explanation,
      answerURL: shuffledQuestions[0].explanation_url,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

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
    const counter = this.incrementCounterAndQuestionId();
    this.setState({
      question: quizData[counter].question,
      answerOptions: quizData[counter].answers,
      alt: quizData[counter].alt,
      kittenValue: quizData[counter].kitten_value
      });
    this.setPreviousAnswerExplanation(counter);
  }

  // the following three functions ensure that questions 2 and beyond display an explanation for the previous question, and that the results screen displays an explanation for the final question
  setResults() {
    const counter = this.incrementCounterAndQuestionId();
    this.setPreviousAnswerExplanation(counter);
  }

  incrementCounterAndQuestionId() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter,
      questionId,
      answer: ''
    });
    return counter;
  }

  setPreviousAnswerExplanation(counter) {
    this.setState({
      answerExplanation: quizData[Number(counter) - 1].answer_explanation,
      answerURL: quizData[Number(counter) - 1].explanation_url,
    });
  }
  
  handleAnswerSelected = (event) => {
    this.setUserAnswer(event.currentTarget.value);
    // add kitten value if answer is correct
    if (event.currentTarget.value === "correct") {
      this.setState({
        kittensEarned: (Number(this.state.kittensEarned) + Number(this.state.kittenValue))
          })
    }

    // add short pause before advancing to next question or results
    if (this.state.questionId < quizData.length) {
      setTimeout(() => this.setNextQuestion(), 500);
    } else {
      setTimeout(() => this.setResults(), 500);
    }
  }
    
  renderResults() {
    return (
      <>
      <ResultsDisplay
        correctAnswers={this.state.answersCount.correct} totalQuestions={quizData.length} 
        kittensEarned={this.state.kittensEarned} />  
      </>
    );
  }
  
  renderQuiz() {
    return (
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
      );
  }

  /* popup code and basic styling gratefully adapted from https://dev.to/skptricks/create-simple-popup-example-in-react-application-5g7f */
  togglePopup() {  
    this.setState({  
      showPopup: !this.state.showPopup  
    })  }

  // onClick = () => this.setState({ showPopup: true })
              
    render() {

      // console.log(`kittensEarned from App: ${this.state.kittensEarned}`)

      return (

        
        <div className="App">
          <div className="App-header">
            <h1>Key Signature Kittens</h1>
            {/* <h3>Learn Key Signature, Earn Kittens!</h3> */}
            <h3> LEARN KEY SIGNATURES, EARN KITTENS!</h3>
            <Sprites/>
          <div>

        
        <section className="kittens_earned">
          <h2 className="score">Kittens Earned: {this.state.kittensEarned}</h2>
        </section>

        <section>

         {/* display answer explananation popup for second question and beyond */}
        {this.state.questionId > 1 ?  <button onClick={this.togglePopup.bind(this)}>View Answer Explanation for Previous Question</button> : null }  

        {this.state.showPopup ?  
        <Popup 
          explanation={this.state.answerExplanation}
          image={this.state.answerURL}  
          closePopup={this.togglePopup.bind(this)}  
        />  
        : null  
        }  

        {this.state.answersCount.correct + this.state.answersCount.incorrect === quizData.length ? this.renderResults() : this.renderQuiz()}
        </section>
        </div>  
        </div>
        </div>
        );         
      }; 
      
    }
      
export default App;