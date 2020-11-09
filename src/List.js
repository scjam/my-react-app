import React from 'react';
import { fetchMovies } from './Utils.js';
import { Link } from 'react-router-dom';
import MovieRender from './MovieRender.js'

export default class List extends React.Component {
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
            <>
                <p><Link to="/Create" className="links">
                    Add a Movie!
                </Link></p>
                <p><Link to="/movies/:id" className="links">
                    Movie Details
                </Link></p>
                <div className="item">
                    {
                        this.state.movies.map(movie => 
                        { return (
                            <Link to={`movies/${movies.id}`} >
                                <MovieRender 
                                movieId={movie.id}
                                name={movie.name}
                                yearReleased={movie.year_released}
                                bestPictureWinner={movie.best_picture_winner}
                                director={movie.director}
                                ownerId={movie.owner_id}
                                />
                            </Link>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}