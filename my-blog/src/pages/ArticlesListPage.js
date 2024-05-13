import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import articles from "./article-content";

const ArticlesListPage = () => {
  return (
    <div>
      <NavBar />
      <p></p>
      <h1>All Articles</h1>
      {articles.map((article, i) => (
        <>
          <Link
            key={article.name}
            className="article-list-item"
            to={`/articles/${article.name}`}
          >
            <h3>{article.name}</h3>
          </Link>
          <p>{article.content[0].substring(0, 150)}...</p>
        </>
      ))}
    </div>
  );
};

export default ArticlesListPage;
