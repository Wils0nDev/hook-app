


//*Estado inicial : Este puede ser un arreglo o un string, etc.
const initialState = [{
    id: 1,
    todo : 'Comprar pan',
    done : false
}];

//*Reducer : es una función pura que recibe 2 argumentos, EstadoInicial y Accion
//*EL Reducer empaqueta todas las acciones que el cliente puede realizar y retorna un nuevo estado.
const todoReducer = (state = initialState, action = {}) => {

    //*Dependiendo de la acción que se ejecute mi reducer retornara el nuevo estado
    if (action.type === 'add_todo') {
                //*Mi nuevo estado retornado es el que se mostrara en mi cliente (pagina/vista)
              return  state =  [ ...state, action.payload ]
    }

    return state;


}

let todos = todoReducer();

const newTodo = 
    {
        id:2,
        todo: 'Comprar galletas',
        done: false
    }

//*Accion: Es lo que el "cliente(pagia o vista)"  ejecutara, este se enviara  nuestro reducer.
//*Este es el formato que nos propone react, (type and payload)
const addTodoAction = {
    type : 'add_todo',
    payload : newTodo
}

todos = todoReducer(todos,addTodoAction);
console.log({state:todos})

//!Esto es algo que no se debe hacer, porque aqui estamos mutando el estado
// todos.push({
//     id:2,
//     todo: 'Comprar galletas',
//     done: false
// })
