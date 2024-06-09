import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<ArticleList />} />
                <Route path="/articles/:id" element={<ArticlePage />} />
            </Routes>
        </Router>
    );
}

export default App;