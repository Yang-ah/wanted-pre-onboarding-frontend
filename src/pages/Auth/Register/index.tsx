import React from "react";
import styles from "./register.module.scss";
import { signUp } from "../../../api/Auth";

const Register = () => {
  const postSignUp = async () => {
    const response = await signUp({
      email: "bbbb@aa.com",
      password: "abcdabcd",
    });
    // console.log(response);
  };

  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="button" data-testid="signup-button" onClick={postSignUp}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Register;
