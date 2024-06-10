// src/components/BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './BookSearch.css';

const BookSearch = ({ onAddToBookshelf, bookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            setResults(response.data.docs);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="book-search">
            <input 
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for books..."
            />
            <div className="book-search-results">
                {results.map(book => (
                    <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} bookshelf={bookshelf} />
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
