import React from "react";
import styles from "./home.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <h1>To-do List</h1>
      <button type="button" onClick={() => navigate("/signin")}>
        로그인
      </button>
      <Link to="/signup">회원가입 하시겠습니까?</Link>
    </div>
  );
};

export default Home;
