import React, { Component } from 'react';
import request from 'superagent';

export default class MovieRender extends Component {
    state = {
        movies: []
    }
    
    componentDidMount = async () => {
        const response = await request.get('https://warm-brushlands-73236.herokuapp.com/movies');

        this.setState({ movies: response.body });
    }
    
    render() {
        return (
            <div className="item">
                {
                    this.state.movies.length > 0
                    ? this.state.movies.map(movie => <div>
                        <p>Name: {movie.name}</p>
                        <p>Year Released: {movie.year_released}</p>
                        <p>Best Picture Winner?: {movie.best_picture_winner ? 'Yes' : 'No'}</p>
                        <p>Director: {movie.director}</p>
                        </div>)
                        : 'loading'
                }
                
            </div>
        )
    }
}