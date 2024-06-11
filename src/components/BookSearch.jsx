import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import BookCard from './BookCard';
import './BookSearch.css';

const BookSearch = ({ onAddToBookshelf, bookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const debouncedSearchRef = useRef(debounce(async (searchQuery) => {
        if (searchQuery) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`);
            setResults(response.data.docs);
        } else {
            setResults([]);
        }
    }, 1000)); // 1000 milliseconds debounce delay

    const handleSearch = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        debouncedSearchRef.current(newQuery);
    };

    useEffect(() => {
        const debouncedSearch = debouncedSearchRef.current;
        // Clean up the debounced function on unmount
        return () => {
            debouncedSearch.cancel();
        };
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
                    <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} bookshelf={bookshelf} />
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
