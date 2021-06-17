import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './App.css';
class Finish extends Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    localStorage.setItem('name',event.target.value);
  }

  handleSubmit(event) {
    this.NameSender();
    this.props.history.push('/leaderboard');
    event.preventDefault();
  }
  
  NameSender(){
    console.log(localStorage.getItem('name'));
    axios.post("http://localhost:8000/savename",{ headers:{name: localStorage.getItem('name'), score: localStorage.getItem('score')}})
                .then(res =>{
                  console.log(res.data);
                })
                .catch(err => {
                    console.error(err);
                })
  }
  render() {
    return (
      <>
        <div className='container'>
          <div className='head'>
            <h1> Save your Score: {localStorage.getItem('score')} </h1>
          </div>
          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <div>
            <Link to='menu'>
              <button >Back</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Finish;
