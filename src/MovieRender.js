import React from 'react'

export default class MovieRender extends React.Component {
    render() {
        return (
            <div>
                <p className="movie-id">{this.props.movieId}</p>
                <p className="name">Movie Name: {this.props.name}</p>
                <p className="year-released">Year Released: {this.props.yearReleased}</p>
                <p className="best-picture-winner">Best Picture Winner? {this.props.bestPictureWinner ? 'Yes' : 'No'}</p>
                <p className="director">Director: {this.props.director}</p>
                <p className="owner-id">Owner Id: {this.props.ownerId}</p>
            </div>
        )
    }
}
