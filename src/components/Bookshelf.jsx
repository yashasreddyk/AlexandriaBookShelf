// src/components/Bookshelf.js
import React from 'react';
import './Bookshelf.css';

const Bookshelf = ({ bookshelf, onRemoveFromBookshelf }) => {
    if (!bookshelf) {
        return <p>Your bookshelf is empty.</p>;
    }

    return (
        <div className="bookshelf">
            {bookshelf.length > 0 ? (
                bookshelf.map((book, index) => (
                    <div key={index} className="book-card">
                        <h3>{book.title}</h3>
                        <p>{book.author_name && book.author_name.join(', ')}</p>
                        <button onClick={() => onRemoveFromBookshelf(book.key)}>Remove from Bookshelf</button>
                    </div>
                ))
            ) : (
                <p>Your bookshelf is empty.</p>
            )}
        </div>
    );
};

export default Bookshelf;
