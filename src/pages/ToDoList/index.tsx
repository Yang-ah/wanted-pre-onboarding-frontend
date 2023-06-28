import React, { useEffect, useState } from "react";
import styles from "./toDoList.module.scss";
import { createToDo, getToDos } from "../../api/ToDoList";
import { ToDoObject } from "../../model";
import { useNavigate } from "react-router-dom";
import ToDo from "./ToDo";
import { IconLemon } from "../../assets";

const ToDoList = () => {
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
    if (!newToDo) return;

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
    <main className={styles.wrap}>
      <h1>To Do List ({toDoList?.length})</h1>
      <p>
        할 일을 추가하고, 완료하면 레몬
        <IconLemon />을 클릭해보세요 :)
      </p>

      <form onSubmit={onCreateToDo} className={styles.form}>
        <input
          type="text"
          data-testid="new-todo-input"
          value={newToDo}
          onChange={onChange}
        />
        <button
          type="submit"
          disabled={!newToDo}
          data-testid="new-todo-add-button"
        >
          +
        </button>
      </form>

      <ul>
        {toDoList?.map((toDo: ToDoObject) => {
          return (
            <ToDo
              key={toDo.id}
              todo={toDo.todo}
              isCompleted={toDo.isCompleted}
              id={toDo.id}
              updateFunction={onGetToDos}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default ToDoList;
