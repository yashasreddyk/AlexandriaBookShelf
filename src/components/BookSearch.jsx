import React, { useState, useEffect} from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './BookSearch.css';

const BookSearch = ({ onAddToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        const fetchBooks = async () => {
            if (debouncedQuery) {
                const response = await axios.get(`https://openlibrary.org/search.json?q=${debouncedQuery}&limit=10&page=1`);
                setResults(response.data.docs);
            } else {
                setResults([]);
            }
        };

        fetchBooks();
    }, [debouncedQuery]);

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
