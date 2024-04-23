const { renderHook } = require("@testing-library/react");
import { act } from 'react-dom/test-utils';
import { useForm } from './../../hooks/useForm';


describe('Pruebas en useForm', () => {

    const initialForm = {
        name : 'Wilson',
        email : 'wilson@gmail.com'
    }
    
    test('debe regresar los valores por defecto', () => { 

        const { result  } = renderHook(()=>useForm(initialForm));
        // console.log(result.current)
        expect(result.current).toEqual({
            name : initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            handleValueInput: expect.any(Function),       
            handleResetButton: expect.any(Function)     
          })
     });

     test('debe cambiar el nombre del formulario', () => { 

  
        const target = {
            name: 'name',
            value : 'Juan'
        }

       
        const { result  } = renderHook(()=>useForm(initialForm));
        const { formState,handleValueInput } = result.current

        act(()=>{
            handleValueInput({ target  })
        })

        expect(result.current.name).toBe('Juan')
        expect(result.current.formState.name).toBe('Juan')
      });

      test('debe resetear el nombre del formulario', () => { 

  
        const initialForm = {
            name: "",
            email: "",
          };

       
        const { result  } = renderHook(()=>useForm(initialForm));
        const { handleResetButton } = result.current

        act(()=>{
            handleResetButton()
        })

        expect(result.current.name).toBe('')
        expect(result.current.email).toBe('')
        expect(result.current.formState).toBe(initialForm)
      });



});