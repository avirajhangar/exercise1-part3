import classes from "./banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <img
        className={classes.banner__img}
        src="./assets/images/caralog10.jpg"
        alt="Hp Banner"
      />
      <div className={classes.banner__background}></div>
      <div className={classes.banner__block}>
        <h2 className={classes.banner__block__subtitle}>Small Bussiness</h2>
        <div className={classes.banner__block__divider}></div>
        <p className={classes.banner__block__text}>
          A Small bussiness Responsive Theme by
          <Link href="/"> CodePlayground</Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
