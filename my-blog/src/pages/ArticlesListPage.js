import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import ArticlesList from "../components/ArticleList";
import articles from "./article-content";

const ArticlesListPage = () => {
  return (
    <div>
      <NavBar />
      <ArticlesList articles={articles} />
    </div>
  );
};

export default ArticlesListPage;
