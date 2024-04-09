

import React from 'react';
import { useRef } from 'react';

export const FocusScreen = () => {

    //! useRef : permite referenciar un valor que no es necesario renderizar, lo usamos para almacenar datos que queremos manipular
    const inputRef = useRef()

    const handleFocusInput = ( ) =>{
        
        //*Ejemplo : inputRef es una referencia del input, con esto podemos manipular el evento focus del input
        inputRef.current.select();
    }



    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef} 
                type="text"
                placeholder='Ingrese nombre'
                className='form-control'
            />
            <button type="button" className='btn btn-primary mt-4' onClick={handleFocusInput}>Focus</button>
        </>
    );
}

