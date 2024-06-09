import React from 'react';
import { Link } from "react-router-dom";

const articles = [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
];

function ArticleList() {
    return (
        <div>
            <h1>Article List</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link to={`/articles/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;