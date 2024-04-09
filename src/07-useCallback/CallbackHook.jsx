


import React, { useCallback } from 'react';
import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import { useEffect } from 'react';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    //!useCallback : Sirve para memorizar funciones y solo cambia si su dependencia(estado) , cambia
    const increment =  useCallback(
      (param) => {
       //* Lo que hacemos aqui es pasarle un callback a setCounter, este toma el valor actual del counter  y le aumenta 1 
       //* Esto permite cambiar el estado , pero la funcion hija no cambia porque se encuentra memorizada e increment apunta al mismo espacio de memoria.
        setCounter((value)=> value + param )
      },
      [],
    )
    //!Para tener en cuenta: 
      //*Si estuvieramos usando el memo y queremos ejecutar algo (peticion fetch) cada vez q esa función cambie, entonces se generaría un ciclo infinito
      //*Pero memorizando la función esto no pasaría
    useEffect(() => {
        increment(5)
        console.log('se renderiza sola una vez')
    }, [increment])
    
    // const increment = () => {
    //     setCounter(counter + 1)
    // }
    return (
        <>
            <h1>useCalllbackHook: <span>{counter}</span></h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    );
}

export default CallbackHook;
