import React, { useState } from "react";
import Link from "next/link";

import classes from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={classes.header}>
      <a className={classes.link} href="/">
        CodePlayground
      </a>
      <nav className={`${classes.mnav} ${menuOpen ? classes.open : ""}`}>
        <button className={classes.navbtn} onClick={toggleMenu}>
          <div className={classes.hamburger}>
            <div
              className={`${classes.line} ${classes.one}  ${
                menuOpen ? classes.open : ""
              }`}
            ></div>
            <div
              className={`${classes.line} ${classes.two}  ${
                menuOpen ? classes.open : ""
              }`}
            ></div>
            <div
              className={`${classes.line} ${classes.three}  ${
                menuOpen ? classes.open : ""
              }`}
            ></div>
          </div>
        </button>
        <div
          className={`${classes.mobilewrap} ${menuOpen ? classes.open : ""}`}
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">sample page</Link>
            </li>
            <li>
              <Link href="/">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={classes.dnav}>
        <div className={classes.desktopwrap}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">sample page</Link>
            </li>
            <li>
              <Link href="/">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
