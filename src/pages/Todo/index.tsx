import React, { useEffect, useState } from "react";
import styles from "./toDo.module.scss";
import { createToDo, deleteToDo, getToDos, updateTodo } from "../../api/ToDo";
import { ToDoObject } from "../../model";

const ToDo = () => {
  const [toDoList, setToDoList] = useState<ToDoObject[]>();

  const onGetToDos = async () => {
    const response = await getToDos();
    console.log(response.data);
    setToDoList(response.data);
  };

  const onCreateToDo = async () => {
    const response = await createToDo({
      todo: "할거없움",
    });
    //console.log(response);
    onGetToDos();
  };

  const onUpdateToDo = async () => {
    const response = await updateTodo(
      { todo: "안녕", isCompleted: true },
      9076
    );
    //  console.log(response);
    onGetToDos();
  };

  const onDeleteToDo = async () => {
    const response = await deleteToDo(9076);
    //  console.log(response);
    onGetToDos();
  };

  useEffect(() => {
    onGetToDos();
  }, []);

  return (
    <div>
      <h1>To Do List</h1>

      <div>
        <input type="text" />
        <button onClick={onCreateToDo}>추가</button>
      </div>
      <ul>
        {toDoList?.map((toDo: ToDoObject) => {
          return (
            <li key={toDo.id}>
              <label>
                <input type="checkbox" />
                <span>{toDo.todo}</span>
              </label>
              <button value={toDo.id} name="modify" onClick={onUpdateToDo}>
                modify
              </button>
              <button value={toDo.id} name="delete" onClick={onDeleteToDo}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
