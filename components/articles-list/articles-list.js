import data from "../../public/assets/data/articles.json";
import Article from "../article/article";
import { useEffect, useState } from "react";
import classes from "./articles-list.module.css";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (data.articles) {
      setArticles(data.articles);
    }
  }, []);

  if (articles.length > 0) {
    return (
      <div className={classes.articles}>
        {articles.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </div>
    );
  }
  return <div>Articles loading...</div>;
};

export default ArticlesList;
