import React from "react";
import styled from "styled-components";

const Article = ({ title, date, description, image }) => {
  return (
    <ArticleContainer>
      <ArticleDate>{date}</ArticleDate>
      <ArticleImage src={`./assets/images/${image}`} alt="article 1" />
      <ArticleTitle>{title}</ArticleTitle>
      <p>{description}</p>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: calc(50% - 15px);
    font-family: "Roboto", sans-serif;
  }

  @media (min-width: 1200px) {
    width: 20%;
    font-family: "Roboto", sans-serif;
  }
`;

const ArticleDate = styled.p`
  color: gray;
  font-size: 15px;
  margin: 15px 0;
`;

const ArticleImage = styled.img`
  width: 100%;
`;

const ArticleTitle = styled.h3`
  padding: 15px 0;
`;

export default Article;
