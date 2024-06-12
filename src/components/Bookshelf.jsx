// src/components/Bookshelf.js
import React from 'react';
import './Bookshelf.css';
import BookCard from './BookCard';

const Bookshelf = ({ bookshelf, onRemoveFromBookshelf }) => {
    if (!bookshelf) {
        return <p>Your bookshelf is empty.</p>;
    }

    return (
        <div className="bookshelf">
            {bookshelf.length > 0 ? (
                bookshelf.map((book, index) => (
                    <BookCard 
                        key={index} 
                        book={book} 
                        bookshelf={bookshelf} 
                        onRemoveFromBookshelf={onRemoveFromBookshelf} 
                        showRemoveButton={true} 
                    />
                ))
            ) : (
                <p>Your bookshelf is empty.</p>
            )}
        </div>
    );
};

export default Bookshelf;


