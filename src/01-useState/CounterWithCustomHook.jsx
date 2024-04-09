import { useCounterObject } from "../hooks";



export const CounterWithCustomHook = () => {

  const counterObj = {
    counter1 : 10,
    counter2 : 20,
    counter3 : 30
}

  //*UseCounter : es nuestro customHook que retornara todo lo que necesitamos para
  //* hacer uso en nuestra UI y poder renderizarlo.
  const {counter,increment,decrement,reset} = useCounterObject(counterObj);

    //*counter : estado
    //*increment,decrement, reset : funciones que realizan acciones
    return (
      <>
        <h1>Counter with Hook: {counter.counter1}</h1>
        <h1>Counter with Hook: {counter.counter2}</h1>
        <h1>Counter with Hook: {counter.counter3}</h1>
        <button className="btn btn-primary" onClick={()=>increment(10)} >+1</button>
        <button className="btn btn-primary"  onClick={reset}>Reset</button>
        <button className="btn btn-primary"  onClick={decrement}>-1</button>
      </>
    );
}

