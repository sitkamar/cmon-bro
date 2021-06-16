import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './App.css';
class Finish extends Component {

  constructor(props) {
    super(props);
    this.state= {leaderboard: []};
  }
  componentDidMount() {this.LeaderSender()}
  
  LeaderSender(){
    axios.get("http://localhost:8000/leaderboarding")
                .then(res =>{
                  const leaderboard = [];
                  res.data.forEach(el => {
                    leaderboard.push(<p>{el[0]} - {el[1]}</p>);
                  });
                  this.setState({leaderboard: leaderboard});
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
            <h1>Leaderboard </h1>
          </div>
        <div>
          {this.state.leaderboard}
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
