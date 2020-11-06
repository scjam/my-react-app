import './App.css';
import React from 'react';
//import fetch from 'superagent';
import Home from './Home.js';
import Create from './Create.js';
import List from './List.js';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';

export default class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route 
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route 
              path="/create"
              exact
              render={(routerProps) => <Create {...routerProps} />}
            />
            <Route 
              path="/list"
              exact
              render={(routerProps) => <List {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
  
}