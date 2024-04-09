

import  { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) =>{
    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahí vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {
    

    const {counter,increment} = useCounter(4000)
    const [show, setShow] = useState(true);

    //! useMemo : es un Hook que memoiza un valor calculado y este cambia siempre y cuando el estado de la dependencia cambie
    //useMemo(() => valor_calculado, [dependencia])
    //*Al tener el valor memorizado y que la dependencia sea el counter, quiere decir que al ejecutar el boton Show/Hide el valor no
    //*se volvera a renderizar, ya que este boton no manipula el estado del contador
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

    return (

        //! Small : el componnente se vuelve a renderizar a pesar que el boton Show/Hide no tiene nada que ver con el.
        //* Para estos casos se usa el useMemo, pero se recomienda usar siempre y cuando el componente tenga un proceso pesado
        <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />
        <h4>{memorizeValue}</h4>
        <button
        className='btn btn-primary'
        onClick={()=>increment()}
        >
            Incrementar
        </button>
        <button
        className='btn btn-primary'
        onClick={()=>setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
        </>
    );
}


