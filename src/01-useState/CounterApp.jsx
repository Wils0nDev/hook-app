import { useState } from "react";



const CounterApp = () => {
    
    //* useState : es un hook que recibe un estado inicial, y retorna 2 valores 
        //* - El estado (counter),
        //* - Una funcion que actualiza el estado(setcounter)
     const [counter, setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30
     });

     const {counter1,counter2,counter3} = counter
     //*handlerCounter: es nuestra  función que dispara el evento click.
     //*como podemos ver dentro de esta función esta el setCounter, que es nuestra función que nos permitira actualizar el estado 
     const handlerCounter = () =>{
        setCounter({
            ...counter,
            counter1:counter1 + 1,

        })
     }
    return (
        //* onClick : es un controlador de evento de react, nos permite disparar acciones
        //* mediando el evento click
        <>
            <h1>Counter: {counter1} </h1>
            <h1>Counter: {counter2} </h1>
            <h1>Counter: {counter3} </h1>
            <hr />
            <button onClick={handlerCounter}> + 1 </button>
            <button> - 1 </button>
        </>
    );
}

export default CounterApp;
