import React, { useState } from "react";
import { ToDoLi } from "../../../model";
import { deleteToDo, updateTodo } from "../../../api/ToDo";
import { IconLemon } from "../../../assets";

const Li = ({ todo, isCompleted, id, updateFunction }: ToDoLi) => {
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

  const onUpdateToDo = async () => {
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
    <li>
      <label>
        <input
          type="checkbox"
          checked={modifiedTodo.isCompleted}
          onChange={onChange}
        />
        <IconLemon />
        {onModify || <span>{todo}</span>}
      </label>

      {onModify && (
        <>
          <input
            type="text"
            name="todo"
            data-testid="modify-input"
            value={modifiedTodo.todo}
            onChange={onChange}
          />
          <button
            value={id}
            type="button"
            data-testid="submit-button"
            onClick={onUpdateToDo}
          >
            제출
          </button>
          <button
            value={id}
            type="button"
            data-testid="cancel-button"
            onClick={cancelModify}
          >
            취소
          </button>
        </>
      )}

      {onModify || (
        <>
          <button
            value={id}
            type="button"
            name="modify"
            data-testid="modify-button"
            onClick={onSetModifyMode}
          >
            modify
          </button>
          <button
            value={id}
            name="delete"
            data-testid="delete-button"
            onClick={onDeleteToDo}
          >
            delete
          </button>
        </>
      )}
    </li>
  );
};

export default Li;
