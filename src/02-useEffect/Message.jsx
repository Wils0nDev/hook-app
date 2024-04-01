

import { useEffect } from 'react';

export const Message = () => {


    useEffect(() => {
        console.log('componente montado')
        //*El return del useEffect nos permite ejecutar código cuando el compoente es desmontado
        return () => {
            console.log('componente desmontado')
        };
    }, []);

    return (
       <>
        <h3>El usuario ya exsite</h3>
       </>
    );
}

