import React from "react";
import './css/todolist.css'
export const TodoItem = ({ description , id,done,handleDeleteTodo,handleCompletedTodo}) => {
  return (
    <li  className={`list-group-item d-flex justify-content-between ${done ?  'tachado' : null } `  }>
      <span className="align-self-center" onClick={()=>handleCompletedTodo(id)}>{description}</span> 
      <button type="button" className="btn btn-danger" onClick={()=>handleDeleteTodo(id)}>
        Borrar
      </button>
    </li>
  );
};
