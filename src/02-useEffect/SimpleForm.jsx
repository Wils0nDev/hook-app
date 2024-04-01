import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

 const formInitialState = {
    username : "wilson",
    email : "wilson18@gmail.com"
  }
  const [formState, setFormState] = useState(formInitialState);
  const {username, email} = formState;

  //! handleValueInput : función que se despirara al ejecutar el evento onChange, este me permitira actualizar el estado de mis inputs
  //*target : objeto que me proporciona el event
  const handleValueInput = ({target}) => {
    //* name : es el name de mi input (username)
    //* value : es el valor que se ingresa en el input
    const {name, value} = target
    setFormState({
      ...formState,
      [name] : value
    },[])
  }


  //! UseEffect : Se dispara despues de rendirizar algo, o algun cambio en el estado. Este sirve para ejecutar efectos secundarios.
   //*Conexiones a servidores cx
   //*Enviar un registro
  //! El useEffect, recibe 2 parametros
     //* callback : función que ejecutara lo que este dentro de el
     //* dependencia : Este parametro es importante ya que depende de este para q el useEffect se ejecute
         //Es recomendable usar "[]" si no se tiene alguna dependencia, ya que al no usarse este puede generar un bucle

         
 //* Se ejecutara una sola vez, ya que no existe una dependencia como tal.
  useEffect(() => {  
   // console.log('el use efect se llamo')
  },[] ); 

  //* Se ejecutara cuando exista algun cambio en el estado del formulario
  useEffect(() => {
   // console.log('formState se llamo')
  },[formState] ); 

  //* Se ejecutara cuando el email cambie, pero el email al estar dentro del formulario, tambien se ejecutara el useEffect anterior
  useEffect(() => {
   // console.log('Email se llamo')
  },[email] );  


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        value={username}
        name="username"
        onChange={handleValueInput}
      />
      
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        value={email}
        name="email"
        onChange={handleValueInput}
      />

      {
        username === 'wilson2' && <Message />
      }

    </>
  );
};
