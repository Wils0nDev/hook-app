
import { useState } from 'react';


export const useForm = (formInitialState) => {

    const [formState, setFormState] = useState(formInitialState);

    const { username, email, password } = formState;
  
    const handleValueInput = ({ target }) => {
      const { name, value } = target;
      setFormState(
        {
          ...formState,
          [name]: value,
        },
        []
      );
    };
    const handleResetButton = ()=>{
      setFormState(formInitialState)
    }

    return {
        handleValueInput,
        handleResetButton,
        username,
        email,
        password
    }

}

