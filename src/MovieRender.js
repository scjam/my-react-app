import React from 'react';

export default class MovieRender extends React.Component {
    render() {
        return (
            <div className="item">
                <p>Name: {this.props.movieName}</p>
                <p>Year Released: {this.props.yearReleased}</p>
                <p>Best Picture Winner?: {this.props.bestPicture ? 'Yes' : 'No'}</p>
                <p>Director: {this.props.director}</p>
            </div>
        )
    }
}