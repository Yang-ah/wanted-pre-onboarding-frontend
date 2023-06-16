import React, { useEffect, useState } from "react";
import styles from "./toDo.module.scss";
import { createToDo, getToDos } from "../../api/ToDo";
import { ToDoObject } from "../../model";
import { useNavigate } from "react-router-dom";
import Li from "./Li";

const ToDo = () => {
  const navigate = useNavigate();
  const [toDoList, setToDoList] = useState<ToDoObject[]>();
  const [newToDo, setNewToDo] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setNewToDo(value);
  };

  const onGetToDos = async () => {
    const response = await getToDos();
    setToDoList(response.data);
  };

  const onCreateToDo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createToDo({
      todo: newToDo,
    });

    onGetToDos();
    setNewToDo("");
  };

  useEffect(() => {
    if (!localStorage.getItem("ACCESS_TOKEN")) {
      navigate("/signin");
    } else {
      onGetToDos();
    }
  }, []);

  return (
    <div>
      <h1>To Do List</h1>

      <form onSubmit={onCreateToDo}>
        <input
          type="text"
          data-testid="new-todo-input"
          value={newToDo}
          onChange={onChange}
        />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>

      <ul>
        {toDoList?.map((toDo: ToDoObject) => {
          return (
            <Li
              key={toDo.id}
              todo={toDo.todo}
              isCompleted={toDo.isCompleted}
              id={toDo.id}
              updateFunction={onGetToDos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
