import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game';
import LeaderBoard from './Leaderboard';
import reportWebVitals from './reportWebVitals';
import Finish from './Finish';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
               <div>
                  <div className="main">
                     <Switch>
                        <Route exact path="/menu" component={App} />
                        <Route path="/game" component= {Game} />
                        <Route path="/leaderboard" component={LeaderBoard} />
                        <Route path="/finish" component={Finish} />
                     </Switch>
                  </div>
               </div>
            </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
