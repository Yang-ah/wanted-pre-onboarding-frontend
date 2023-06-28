import { ToDo, OnlyToDo } from "../../model/index";
import apiClient from "../apiClient";

export const createToDo = (body: OnlyToDo) => {
  return apiClient.post("/todos", body);
};

export const getToDos = () => {
  return apiClient.get("/todos");
};

export const updateTodo = (body: ToDo, id: number) => {
  return apiClient.put(`/todos/${id}`, body);
};

export const deleteToDo = (id: number) => {
  return apiClient.delete(`/todos/${id}`);
};
