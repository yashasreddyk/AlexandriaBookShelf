// src/components/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAddToBookshelf, bookshelf }) => {
    const handleAddToBookshelf = () => {
        const isBookInBookshelf = bookshelf.some(b => b.key === book.key);
        if (isBookInBookshelf) {
            window.alert('Book already in bookshelf');
        } else {
            onAddToBookshelf(book);
        }
    };

    return (
        <div className="book-card">
            <h3>Book Title: {book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
            <button onClick={handleAddToBookshelf}>Add to Bookshelf</button>
        </div>
    );
};

export default BookCard;
