import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='head'>
            <h1> Mega Quiz </h1>
          </div>
          <div className='col'>
            <Link to='game'>
              <button >Hrát</button>
            </Link>
            <Link to='leaderboard'>
              <button >Leaderboard</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default App;
