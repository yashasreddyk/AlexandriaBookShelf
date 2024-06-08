// src/pages/BookshelfPage.js
import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';
import Navbar from '../components/Navbar';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBooks);
    }, []);

    return (
        <div>
            <Navbar />
            <Bookshelf bookshelf={bookshelf} />
        </div>
    );
};

export default BookshelfPage;

