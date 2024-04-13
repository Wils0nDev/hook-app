
//!Provider : es un heigher order component el cual recivira y encapsulara los elementos(componentes) 
//!UserContext.Provider : Es un proveedor de contexto que encapsula los componentes y comparte la información que viene del contexto

import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id:123,
//     name : "wilson",
//     email : "ewilson@gmail.com"
// }

//*Creando un provider o proveedor
//*children : son los componentes hijos que recibira 
export const UserProvider = ({children}) => {

  
  const [user, setUser] = useState();

  const handleSetUser = ( user) =>{
    setUser(user)
  }
  return (
    // <UserContext.Provider value={{hola:'Mundo', user:user}}>
    <UserContext.Provider value={{user,handleSetUser}}>
        {children}
    </UserContext.Provider>
  )
}
