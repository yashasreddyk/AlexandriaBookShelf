import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="home-button">Home</Link>
            <Link to="/bookshelf" className="bookshelf-button">My Bookshelf</Link>
        </div>
    );
};

export default Navbar;
