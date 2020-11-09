import React, { Component } from 'react'
import { fetchDirectors, updateMovie, fetchMovie, deleteMovie } from './Utils.js';

const localStorageUser = {
    userId: 1
}

export default class Update extends Component {
    state = {
        directors: [],
        name: '',
        yearReleased: 1990,
        bestPictureWinner: false,
        directorId: 1
    }

    componentDidMount = async () => {
        const directors = await fetchDirectors();
        const movie = await fetchMovie(this.props.match.params.id);
        const stringDirectorName = movie.director;
        const matchingDirector = directors.find((director) => {
            return director.name === stringDirectorName
        });

        this.setState({ 
            name: movie.name,
            yearReleased: movie.year_released,
            bestPictureWinner: movie.best_picture_winner,
            directors: directors,
            directorId: matchingDirector.id
         });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        await updateMovie(
            this.props.match.params.id,
            {
                name: this.state.name,
                year_released: this.state.yearReleased,
                best_picture_winner: this.state.bestPictureWinner,
                director_id: this.state.directorId,
                owner_id: localStorageUser.userId
            }
        );

        this.props.history.push('/');
    }

    handleDelete = async (e) => {
        e.preventDefault();

        await deleteMovie(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                Update or Delete a Movie
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input 
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value})} 
                        type="text" />
                    </label>
                    <label>
                        Year Released: 
                        <input 
                        value={this.state.yearReleased}
                        onChange={e => this.setState({ yearReleased: e.target.value})} 
                        type="number" />
                    </label>
                    <label>
                        Did it win best picture?:
                        <input 
                        checked={this.state.bestPictureWinner}
                        onChange={e => this.setState({ bestPictureWinner: e.target.checked })} 
                        type="checkbox" />
                    </label>
                    <label>
                        Director: 
                        <select onChange={this.handleChange}>
                            {
                                this.state.directors.map(director => <option 
                                selected={this.state.directorId === director.id}
                                key={director.id} 
                                value={director.id}>
                                    {director.name}
                                </option>
                                )
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </form>
            </div>
        )
    }
}
