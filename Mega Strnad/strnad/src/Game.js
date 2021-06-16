import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './App.css';
var questionNumber = 1;
var score = 0;
class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {question1: '', question2: '', answer: '',correct: '', correctAnswer:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {this.Start();this.Question1()}

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    localStorage.setItem('value', value);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(questionNumber>25){
      localStorage.setItem('score', score);
      this.props.history.push('/finish');
    }else{
//    const answer = this.state.value;
    //this.setState({ answer: answer });
    this.Question2();
}
  }
  
  Start(){
    localStorage.setItem('correctAnswer','');
    localStorage.setItem('value','');
    axios.get("http://localhost:8000/start")
                .then(res => {
                })
                .catch(err => {
                    console.error(err);
                })
  }
  Question1(){
    axios.get("http://localhost:8000/users")
                .then(res => {
                    const question = res.data.ahoj;
                    this.setState({ question2: this.state.question1, question1: question});
                })
                .catch(err => {
                    console.error(err);
                })
  }
  Question2(){
    axios.get("http://localhost:8000/question")
                .then(res => {
                    const correctAnswer = res.data.ahoj;
                      localStorage.setItem('correctAnswer', correctAnswer);
                    
    const correct = this.correct(localStorage.getItem('value'));
    let textResponse = '';
    if(correct===true){
      //this.setState({correct: "Correct"});
      textResponse = 'Correct';
      score++;
    }else{
      //this.setState({correct: "Wrong"});
      textResponse = 'Wrong';
    }
    if(questionNumber===25){
      this.setState({answer: localStorage.getItem('value'), correct: textResponse, question1: 'Finished' });
            //this.setState({question1: "Finished"});
            
          }else{
      this.setState({answer: localStorage.getItem('value'), correct: textResponse });
              this.Question1();
          }      
    questionNumber++;
                })
                .catch(err => {
                    console.error(err);
                })
                
  }
  correct(answerPhrase) {
    console.log(answerPhrase);
    const correctAnswer = localStorage.getItem('correctAnswer').toString();
    console.log(correctAnswer);
    const answer = answerPhrase.toString();
    if(answer==='')return false;
    if(answer!==correctAnswer)return false;
    return true;
  }
  render() {
    return (
      <>
        <div className='container'>
          <div className='head'>
            <h1> Quiz Time </h1>
            <h2>Your score: {score}</h2>
          </div>
          <div className='question'>
            <h2>Question {questionNumber}: {this.state.question1}</h2>
          </div>
        <textarea type='text' id='resultField' onChange={(e) => this.handleChange(e)}>{this.state.value}</textarea>
        <button onClick={(e) => this.handleSubmit(e)}> Submit </button>
      <div>
      <h2>Previos Question: {this.state.question2}</h2>
      <h3>You answered: {this.state.answer} / {this.state.correct}</h3>
      <h3>Correct answer: {localStorage.getItem('correctAnswer')}</h3>
            <Link to='menu'>
              <button >Back</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Game;