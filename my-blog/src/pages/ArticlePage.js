import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import articles from "./article-content";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);
  return (
    <div>
      <NavBar />
      <div>
        <p></p>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
