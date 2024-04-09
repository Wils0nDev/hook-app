export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "add_todo":
      return [...initialState, action.payload];
    case "delete_todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "completed_todo":
      initialState.find((todo) => {
        if(todo.id === action.payload){
           if(todo.done) {
            todo.done = false
           }else{
            todo.done = true
           }
        }

      } );
      return [...initialState]

    default:
      return initialState;
  }
};
