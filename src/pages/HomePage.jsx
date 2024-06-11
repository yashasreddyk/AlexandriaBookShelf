// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import BookSearch from '../components/BookSearch';
import Navbar from '../components/Navbar';

const HomePage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBooks);
    }, []);

    const handleAddToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div>
            <Navbar />
            <BookSearch onAddToBookshelf={handleAddToBookshelf} bookshelf={bookshelf} />
        </div>
    );
};

export default HomePage;

