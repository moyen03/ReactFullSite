import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import articles from "./article-content";

const ArticlePage = () => {
  const { articleId } = useParams();
  return (
    <div>
      <Navbar />
      <h1>This is the article for the article: {articleId}</h1>
    </div>
  );
};

export default ArticlePage;
