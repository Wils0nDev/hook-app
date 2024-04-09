import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";


//*Estado inicial
//*Una forma de inicializar mi estado en caso no haya nada en el local storage es asi
//const initialState = JSON.parse(localStorage.getItem('todos')) || [];
const initialState =  [];

//*Otra forma de inicializar mi estado en caso no haya nada en el local storage,
//*es haciendo uso del 3er parametro de mi "useReducer"
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {
    
    //*useReducer : envio una funcion reducer y mi estado inicial
  const [todos, dispatch] = useReducer(todoReducer, initialState,init);

  useEffect(() => { 
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  //*handleNewTodo : Recibe mi nuevo todo que se despacharaa mi reudcer
  const handleNewTodo = (todo) => {

    //*action : accion que despachara el dispatch
    const action = {
      //*type: el tipo de accion que se realzara
      type: 'add_todo',
      //*payload : almacena mi todo
      payload: todo
    }
    //*despachamos la accion
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: 'delete_todo',
      payload: id
    }
    dispatch(action)
  }

  const handleCompletedTodo = (id) => {
    const action = {
      type: 'completed_todo',
      payload: id
    }
    dispatch(action)
  }

  const todosCount = () =>{
    return todos.length
  }

  const pendingTodo = () =>{
    return todos.filter(todo => !todo.done).length
  }

  return {
    handleNewTodo,
    handleDeleteTodo,
    handleCompletedTodo,
    todos,
    todosCount,
    pendingTodo
  }
}