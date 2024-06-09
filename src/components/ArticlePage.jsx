import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

const articles = [
    { id: 1, title: "Article 1", content: 'Content 1' },
    { id: 2, title: "Article 2", content: 'Content 2' },
    { id: 3, title: "Article 3", content: 'Content 3' },
];

function ArticlePage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) {
        return <div>Article not found</div>
    }
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default ArticlePage;