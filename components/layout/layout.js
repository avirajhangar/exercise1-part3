import { Fragment } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
