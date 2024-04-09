import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos = [],
  handleDeleteTodo,
  handleCompletedTodo,
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          description={todo.description}
          key={todo.id}
          handleDeleteTodo={handleDeleteTodo}
          id={todo.id}
          handleCompletedTodo={handleCompletedTodo}
          done={todo.done}
        />
      ))}
    </ul>
  );
};
