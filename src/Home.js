import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Welcome to the Nineties Movie Page</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List of Movies!</Link>
                    </li>
                    <li>
                        <Link to="/create">Add a Movie!</Link>
                    </li>
                </ul>
                <img src="../90s.jpg" alt="Nineties Collage" />
            </div>
        )
    }
}