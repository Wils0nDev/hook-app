

import  { memo } from 'react';

//*De esta forma memorizamos nuestro componente.
export const Small = memo(({value}) => {
    console.log('me volvi a dibujar :( ')
    return (
       <><small>{value}</small></>
    );
})
