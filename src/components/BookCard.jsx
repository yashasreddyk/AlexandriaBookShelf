// src/components/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAddToBookshelf, onRemoveFromBookshelf, bookshelf, showRemoveButton }) => {
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
            {showRemoveButton ? (
                <button onClick={() => onRemoveFromBookshelf(book)}>Remove</button>
            ) : (
                <button onClick={handleAddToBookshelf}>Add</button>
            )}
        </div>
    );
};

export default BookCard;

