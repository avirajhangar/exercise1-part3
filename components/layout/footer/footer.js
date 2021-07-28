import Link from "next/link";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.divider}></div>
      <div className={classes.footer}>
        <div className={classes.footer__social}>
          <a href="/">
            <img
              className={classes.footer__social__img}
              src="./assets/icons/git.png"
              alt="git"
            />
          </a>
          <a href="/">
            <img
              className={classes.footer__social__img}
              src="./assets/icons/twi.png"
              alt="twitter"
            />
          </a>
          <a href="/">
            <img
              className={classes.footer__social__img}
              src="./assets/icons/fb.png"
              alt="facebook"
            />
          </a>
          <a href="/">
            <img
              className={classes.footer__social__img}
              src="./assets/icons/2168290.png"
              alt="google plus"
            />
          </a>
          <a href="/">
            <img
              className={classes.footer__social__img}
              src="./assets/icons/mail.png"
              alt="mail"
            />
          </a>
          <a href="/">
            <img
              className={classes.footer__social__img}
              src="./assets/icons/u.png"
              alt="user"
            />
          </a>
        </div>
        <p className={classes.footer__copyright}>
          &copy; 2021 <Link href="/">Hangar WW - Code Playground</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
