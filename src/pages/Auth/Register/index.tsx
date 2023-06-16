import React from "react";
import styles from "./register.module.scss";

const Register = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="submit" data-testid="signup-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Register;
