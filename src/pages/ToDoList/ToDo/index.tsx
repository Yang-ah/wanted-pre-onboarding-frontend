import React, { useState } from "react";
import { ToDoLi } from "../../../model";
import { deleteToDo, updateTodo } from "../../../api/ToDo";
import { IconCheck, IconLemon } from "../../../assets";
import styles from "./toDo.module.scss";

const ToDo = ({ todo, isCompleted, id, updateFunction }: ToDoLi) => {
  const [onModify, setOnModify] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState({
    todo,
    isCompleted,
  });

  const cancelModify = () => {
    setOnModify(false);
    setModifiedTodo({ ...modifiedTodo, todo });
  };

  const onSetModifyMode = () => setOnModify((cur) => !cur);

  const onDeleteToDo = async () => {
    await deleteToDo(id);
    updateFunction();
  };

  const onUpdateToDo = async (
    event: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    await updateTodo(
      { todo: modifiedTodo.todo, isCompleted: modifiedTodo.isCompleted },
      id
    );
    updateFunction();
    setOnModify(false);
  };

  const onChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const { type, name, checked, value } = event.currentTarget;

    if (type === "checkbox") {
      setModifiedTodo({ ...modifiedTodo, isCompleted: checked });
      await updateTodo({ todo, isCompleted: checked }, id);
    } else {
      setModifiedTodo({ ...modifiedTodo, [name]: value });
    }
  };

  return (
    <li className={styles.wrap}>
      <label className={styles.checkLabel}>
        <input
          type="checkbox"
          checked={modifiedTodo.isCompleted}
          onChange={onChange}
        />
        <div className={styles.icon}>
          <IconLemon className={styles.lemon} />
          <IconCheck className={styles.check} />
        </div>
        {onModify || <span>{todo}</span>}
      </label>

      {onModify && (
        <form onSubmit={onUpdateToDo}>
          <input
            type="text"
            name="todo"
            data-testid="modify-input"
            value={modifiedTodo.todo}
            onChange={onChange}
            className={styles.modifyInput}
          />
          <button
            value={id}
            type="submit"
            data-testid="submit-button"
            onClick={onUpdateToDo}
            className={styles.basicButton}
          >
            제출
          </button>
          <button
            value={id}
            type="button"
            data-testid="cancel-button"
            className={styles.basicButton}
            onClick={cancelModify}
          >
            취소
          </button>
        </form>
      )}

      {onModify || (
        <>
          <button
            value={id}
            type="button"
            name="modify"
            data-testid="modify-button"
            onClick={onSetModifyMode}
            className={styles.basicButton}
          >
            수정
          </button>
          <button
            value={id}
            name="delete"
            type="button"
            data-testid="delete-button"
            onClick={onDeleteToDo}
            className={styles.basicButton}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default ToDo;
