import React from "react";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.wrap}>
      <h1>Login</h1>
      <form>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="submit" data-testid="signin-button">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
