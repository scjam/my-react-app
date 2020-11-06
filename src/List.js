import React, { Component } from 'react';
import { fetchMovies } from './Utils.js';

export default class List extends Component {
    state = {
        movies: []
    }
    
    componentDidMount = async () => {
        const movies = await fetchMovies();

        this.setState({ movies });
    }
    
    render() {
        const { movies } = this.state;
        return (
            <div className="item">
                {
                    movies.length > 0
                    ? movies.map(movie => <div>
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