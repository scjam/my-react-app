import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header"> 
            <h1>90's Movies</h1>
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
                <li>
                    <Link to="/movies/:id">Update/Delete a Movie!</Link>
                </li>
            </ul>
            </div>
        )
    }
}