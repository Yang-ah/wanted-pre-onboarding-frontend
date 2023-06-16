import React, { useEffect, useState } from "react";
import styles from "./register.module.scss";
import { signUp } from "../../../api/Auth";
import { IAuth } from "../../../model";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [pass, setPass] = useState(true);
  const [form, setForm] = useState<IAuth>({
    email: "",
    password: "",
  });

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { type, value } = event.currentTarget;
    const { email, password } = form;

    setForm({ ...form, [type]: value });

    const updatedEmail = type === "email" ? value : email;
    const updatedPassword = type === "password" ? value : password;

    if (updatedEmail.includes("@") && updatedPassword.length > 7) {
      setPass(false);
    } else {
      setPass(true);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = form;

    try {
      const response = await signUp({
        email,
        password,
      });
      if (response.status === 201) {
        navigate("/signin");
      }
    } catch (error) {
      console.log("signUp err: ", error);
      alert("회원가입 오류입니다🫠,, 다시 시도해보시겠어요?");
    }
    setForm({ email: "", password: "" });
  };

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      navigate("/todo");
    }
  }, []);

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          data-testid="email-input"
          value={form.email}
          onChange={onChange}
        />
        <input
          type="password"
          data-testid="password-input"
          value={form.password}
          onChange={onChange}
        />
        <button type="submit" data-testid="signup-button" disabled={pass}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Register;
