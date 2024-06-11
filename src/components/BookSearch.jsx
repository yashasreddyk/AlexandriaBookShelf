import React, { useState, useCallback } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './BookSearch.css';

const BookSearch = ({ onAddToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = useCallback((e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            const fetchBooks = async () => {
                const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
                setResults(response.data.docs);
            };
            fetchBooks();
        } else {
            setResults([]);
        }
    }, []);

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
                    <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
                ))}
            </div>
        </div>
    );
};

export default BookSearch;

