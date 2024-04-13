import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "./useTodo";


export const TodoApp = () => {

  const {  
    handleNewTodo,
    handleDeleteTodo,
    handleCompletedTodo,
    todos,
    todosCount,
    pendingTodo
  } = useTodos()

  return (
    <>
      <h1>
        TodoApp ({todosCount()}), <small> pendientes : {pendingTodo()}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
            <TodoList todos={todos}  handleDeleteTodo={handleDeleteTodo}  handleCompletedTodo={handleCompletedTodo}/>
          
        </div>
        <div className="col-5">
         <TodoAdd  handleNewTodo={handleNewTodo}  />
        </div>
      </div>
    </>
  );
};
