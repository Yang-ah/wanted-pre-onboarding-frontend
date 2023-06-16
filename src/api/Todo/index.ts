import apiClient from "../apiClient";

type ToDo = {
  todo: string;
  isCompleted: boolean;
};

type OnlyToDo = Pick<ToDo, "todo">;

export const createToDo = (body: OnlyToDo) => {
  return apiClient.post("/todos", body, {
    headers: { "Content-Type": "application/json" },
  });
};

export const getToDos = () => {
  return apiClient.get("/todos");
};

export const updateTodo = (body: ToDo, id: number) => {
  return apiClient.put(`/todos/${id}`, body, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteToDo = (id: number) => {
  return apiClient.delete(`/todos/${id}`);
};
