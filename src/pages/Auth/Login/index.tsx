import React from "react";
import styles from "./login.module.scss";
import { signIn } from "../../../api/Auth";

const Login = () => {
  const postSignIn = async () => {
    const response = await signIn({
      email: "bbbb@aa.com",
      password: "abcdabcd",
    });
    localStorage.setItem("ACCESS_TOKEN", response.data.access_token);
  };

  return (
    <div className={styles.wrap}>
      <h1>Login</h1>
      <div>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="button" data-testid="signin-button" onClick={postSignIn}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
