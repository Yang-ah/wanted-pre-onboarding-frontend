import { IAuth } from "./../../model/index";
import apiClient from "../apiClient";

export const signUp = (body: IAuth) => {
  return apiClient.post("/auth/signup", body, {
    headers: { "Content-Type": "application/json" },
  });
};

export const signIn = (body: IAuth) => {
  return apiClient.post("/auth/signin", body, {
    headers: { "Content-Type": "application/json" },
  });
};
