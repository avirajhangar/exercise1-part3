import React from "react";
import classes from "./article.module.css";

const Article = ({ title, date, description, image }) => {
  return (
    <div className={classes.article}>
      <p className={classes.article__date}>{date}</p>
      <img
        className={classes.article__img}
        src={`./assets/images/${image}`}
        alt="article 1"
      />
      <h3 className={classes.article__title}>{title}</h3>
      <p className={classes.article__description}>{description}</p>
    </div>
  );
};

export default Article;
