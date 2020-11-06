import React, { Component } from 'react';
import request from 'superagent';

const localStorageUser = {
    userId: 1
}

export default class Create extends Component {
    state = {
        directors: []
    }

    getAllDirectors = async () => {
        const response = await request.get(`https://warm-brushlands-73236.herokuapp.com/directors`);
        this.setState({ directors: response.body });
    }
    
    componentDidMount = async () => {
        this.getAllDirectors()
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const createMovie = {
            name: this.state.name,
            year_released: this.state.yearReleased,
            best_picture_winner: this.state.bestPictureWinner,
            director_id: this.state.directorId,
            owner_id: localStorageUser.userId
        };

        await request
            .post(`https://warm-brushlands-73236.herokuapp.com/movies`)
            .send(createMovie)
        this.props.history.push('/');
    }

    handleDirector = async (e) => {
        e.preventDefault();
        const createDirector = {
            name: this.state.directorName,
        };

        await request
            .post(`https://warm-brushlands-73236.herokuapp.com/directors`)
            .send(createDirector)
            this.getAllDirectors()
            this.setState({ directorName: '' 
        });
    }

    handleChange = (e) => {
        this.setState({ directorId: e.target.value });
    }
    
    render() {
        return (
            <div>
                <h3>Add a Movie</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>
                        Name:
                        <input onChange={e => this.setState({ name: e.target.value})} type="text" />
                        </label>
                    </p>
                    <p>
                        <label>
                        Year Released: 
                        <input onChange={e => this.setState({ yearReleased: e.target.value})} type="number" />
                        </label>
                    </p>
                    <p>
                        <label>
                        Did it win best picture?:
                        <input 
                        selected={this.state.bestPictureWinner}
                        onChange={e => this.setState({ bestPictureWinner: e.target.value})} 
                        type="checkbox" />
                        </label>
                    </p>
                    <p>
                        Director: 
                        <select onChange={this.handleChange}>
                            {
                                this.state.directors.map(director => 
                                <option key={director.id} value={director.id}>
                                    {director.name}
                                </option>)
                            }
                        </select>
                    </p>
                    <button>Submit</button>
                </form>
                <h3>Add a Director</h3>
                <form onSubmit={this.handleDirector}>
                    <label>
                        Director Name:
                        <input 
                            onChange={e => this.setState({ directorName: e.target.value })} 
                            type="text" 
                            value={this.state.directorName} 
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
