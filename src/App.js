import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Sprites from './components/Sprites';
import Question from './components/Question';
import Questions from './components/Questions';
import Quiz from './components/Quiz';
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

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/')
    .then((response) => {
      const quizDatabase = response.data.map((quizDataSet) => {
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
    console.log(this.state.quiz);

    return (
      <div className="App">
        <div className="App-header">
          <h1>key signature kittens</h1>
          <h3>LEARN KEY SIGNATURES, EARN KITTENS!</h3>
          <Sprites/>
        </div>
        <h3>What is this key signature?</h3>

        <Question content="What is this key signature?" treble_url='https://lh3.googleusercontent.com/bwDmcgD4YDYzKJstp1qYHFDWsqtR4K2SN9clK5B-Mc7v3zM6oXvAviCA7AODILxfwgQ9be2z6ZY9nwetu0SteBSyrBN44PXE6PcVyiLI4Jtl9wXMbJJjhNApjCYO_fPbcu7ElPJWv-ca1fcOnmH6sdjjlPklb1OhYPQdTEEmQWJtjbUXnJip0hmHs0rTEUw_Hwe7TY15Evz5SzAebSlmioLuBICEG_btcpWIT-_hYKy_TyoMfTiMCmxJi8yT5td-WIb_Bwx-0LIymGUMoJXKsbNm6g4Tt40g9hejmso4bS0NOVPaWtF4DF5evXIBbWUllrlhIhkEg0eRplVgMdtsfUi4NLeLSuPrk9tznHBILaFMA5MB8CJDsTKtKqNBhWCQ1Fg8N0ggw3yxsNP5K5ujyMOgnN2F0j4YAn9QdmdZ0ZKFWVL2j0J2P6bexg0JWciE9uDnwer5BcmiUqvtH0Q6htSB3oNx_ZDDN0gGjY7zrOm5fCkWQZKANq5v6Q9DBL9u1ZxdWQbvwI3bGd60pn6spgsjryX4ejAGKXtVwoOaCGvGbxqmrUnfZFBi_GxZCMZI2FGUcZ4Ntiz6p0jJrRhSUdxndB31dTKIMI2lriX78Wf9GVG5fhbOrilNMKw5I2PkpeahJjPDqpY6ZJuLEtGXlnFH6w8wMkYqBcrAQVUXZZ_X-Y-QQOwT0w=w298-h436-no' alt='Key signature with no sharps or flats'/>

        {/* <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizDataSet.length}
        onAnswerSelected={this.handleAnswerSelected}
        /> */}

      </div>

    );
  }
}

export default App;
