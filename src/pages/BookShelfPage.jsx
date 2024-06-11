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

    const handleRemoveFromBookshelf = (bookKey) => {
        const updatedBookshelf = bookshelf.filter(book => book.key !== bookKey);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div>
            <Navbar />
            <Bookshelf bookshelf={bookshelf} onRemoveFromBookshelf={handleRemoveFromBookshelf} />
        </div>
    );
};

export default BookshelfPage;

