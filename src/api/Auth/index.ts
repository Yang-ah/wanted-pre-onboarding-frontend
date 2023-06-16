import apiClient from "../apiClient";

interface IAuth {
  email: string;
  password: string;
}

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
