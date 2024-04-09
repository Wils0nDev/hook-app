

import  { useState } from 'react';
import { useCounter } from './../hooks';
import {Small} from './Small';

export const Memorize = () => {

    const {counter,increment} = useCounter(0)
     const [show, setShow] = useState(true);

     const handleShowComponent = () =>{  
            setShow(!show)
     }

    return (
        //! Small : el componnente se vuelve a renderizar a pesar que el boton Show/Hide no tiene nada que ver con el.
        //* Para estos casos se usa el useMemo, pero se recomienda usar siempre y cuando el componente tenga un proceso pesado
        <>
        <h1>Counter: <Small value={counter}/></h1>
        <button
        className='btn btn-primary'
        onClick={()=>increment()}
        >
            Incrementar
        </button>
        <button
        className='btn btn-primary'
        onClick={()=>handleShowComponent()}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
        </>
    );
}


