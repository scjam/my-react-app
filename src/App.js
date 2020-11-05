import './App.css';
import React from 'react';
import fetch from 'superagent';
import MovieRender from './MovieRender.js';
import Create from './Create.js';
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
              render={(routerProps) => <MovieRender {...routerProps} />}
            />
            <Route 
              path="/create"
              exact
              render={(routerProps) => <Create {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
  
}