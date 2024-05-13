import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <div>
      <p></p>
      <h1>All Articles</h1>
      {articles.map((article) => (
        <div key={article.name} className="article-list-item">
          <Link to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
          </Link>
          <p>{article.content[0].substring(0, 150)}...</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
