import React, { Component } from 'react'
import { fetchDirectors, createMovie } from './Utils.js';

const localStorageUser = {
    userId: 1
}

export default class Create extends Component {
    state = {
        directors: []
    }

    componentDidMount = async () => {
        const directors = await fetchDirectors();

        this.setState({ directors });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        await createMovie({
            name: this.state.name,
            year_released: this.state.yearReleased,
            best_picture_winner: this.state.bestPictureWinner,
            director_id: this.state.directorId,
            owner_id: localStorageUser.userId
        });
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ directorId: e.target.value });
    }
    
    render() {
        return (
            <div>
                Add a movie
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={e => this.setState({ name: e.target.value})} type="text" />
                    </label>
                    <label>
                        Year Released: 
                        <input onChange={e => this.setState({ yearReleased: e.target.value})} type="number" />
                    </label>
                    <label>
                        Did it win best picture?:
                        <input onChange={e => this.setState({ bestPictureWinner: e.target.value})} type="boolean" />
                    </label>
                    <label>
                        Director: 
                        <select onChange={this.handleChange}>
                            {
                                this.state.directors.map(director => <option key={director.id} value={director.id}>
                                    {director.name}
                                </option>)
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
