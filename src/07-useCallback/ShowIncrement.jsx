


import React from 'react';
//*Si nosotros memorizamos esto sin usar el useCallback en el padre, igual se volvera a renderizar,
//* 1 - El estado cambia
//* 2 - Cada vez que renderizamos algo las funciones y/o los objetos apuntan a espacios de memoria diferentes
//* Entonces cada vez que el componentes se vuelve a dibujar, esta función es diferente (esta en otro espacio de momoria)
export const ShowIncrement = React.memo(({increment}) => {

    console.log('me volvi a generar :(')
    return (
        <button
            className='btn btn-primary'
            onClick={()=>{
                increment(5)
            }}
        >
            Incrementar
        </button>
    );
})

