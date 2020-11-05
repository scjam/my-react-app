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
  
  state = {
    movieData: []
  }
  
  componentDidMount = async () => {
    const response = await fetch.get(`https://warm-brushlands-73236.herokuapp.com/movies`);
    
    await this.setState({ movieData: response.body });
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.movieData.map((movie, i) =>
            { return (
              <MovieRender 
              key={i}
              uniqueId={movie.id}
              movieName={movie.name}
              yearReleased={movie.year_released}
              bestPicture={movie.best_picture_winner}
              director={movie.director}
              ownerId={movie.owner_id}
              />
            )
          })
        }
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