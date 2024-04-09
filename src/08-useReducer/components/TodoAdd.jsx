




import React from 'react'
import { useState } from 'react'
import { useForm } from './../../hooks/useForm';



export const TodoAdd = ({handleNewTodo}) => {
  
  
   
   //*useForm : customHook que me almacena mis valores de mi formulario y retorna lo que necesito.
   //*recibe un objeto como inicial state
   const   {
    description,
    handleValueInput,
    handleResetButton } = useForm({
    description: ''
   })

   //*onFormSubmit : funcion que se ejecuta desde mi evento onSubmit
   //*Este permitira alamacenar mi newTodo  y enviarle a mi funcion que viene desde todoApp "handleNewTodo"
   const onFormSubmit = (event) => {
      event.preventDefault();
      if(description.length <= 1 ) return;
      const newTodo = {
        id : new Date().getTime(),
        description : description,
        done: false
      };
      //*envio mi nuevo todo
      handleNewTodo(newTodo);
      handleResetButton();
   }

   return (
    <>
     <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="¿Qué hay que hacer ? "
              className="form-control"
              name='description'
              value={description}
              onChange={handleValueInput}
            />
            <button 
            type="submit" 
            className="btn btn-outline-primary mt-1"            
            >
              Agregar
            </button>
          </form>

    </>
  )
}

