import React from "react";
import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";

const description = `안녕하세요, 접속하신 페이지는 원티드 프리온보딩 선발과제의 'home'입니다. 
페이지 상단의 메뉴바를 통해 '/', '/todo', '/signin', '/signup' 페이지로 접속할 수 있습니다.
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <h1>
        wanted pre onboarding <span>frontend</span>
      </h1>
      <p className={styles.description}>{description}</p>
      <button onClick={() => navigate("/signin")}>로그인 &rarr; </button>
    </div>
  );
};

export default Home;
