import data from "../../public/assets/data/articles.json";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Article from "../article/article";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (data.articles) {
      setArticles(data.articles);
    }
  }, []);

  if (articles.length > 0) {
    return (
      <ArticlesContainer>
        {articles.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </ArticlesContainer>
    );
  }
  return <div>Articles loading...</div>;
};

const ArticlesContainer = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  @media (min-width: 768px) and (max-width: 1199px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0 30px;
  }
`;

export default ArticlesList;
