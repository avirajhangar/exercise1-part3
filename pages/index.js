import Banner from "../components/banner/banner";
import ArticlesList from "../components/articles-list/articles-list";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <Banner />
      <ArticlesList />
    </Fragment>
  );
}
