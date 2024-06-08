// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookshelfPage from './pages/BookShelfPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bookshelf" element={<BookshelfPage />} />
            </Routes>
        </Router>
    );
};

export default App;

