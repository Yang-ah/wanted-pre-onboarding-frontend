import React from "react";
import styles from "./layout.module.scss";
import { Link, Outlet } from "react-router-dom";
import Nav from "./Nav";
import { IconGithub } from "../../assets";

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <Nav />
      <Outlet />
      <Link
        to="https://github.com/Yang-ah/wanted-pre-onboarding-frontend"
        target="_blank"
        className={styles.footer}
      >
        <span>지원자 : 주양아</span>
        <IconGithub />
      </Link>
    </div>
  );
};

export default Layout;
