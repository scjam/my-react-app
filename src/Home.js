import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Hello and Welcome</h2>
                <p>To the Nineties Movie Page</p>
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
            </div>
        )
    }
}