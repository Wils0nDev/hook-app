import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";





describe('Pruebas en el useCounter',()=>{


    test('debe retornar los valores por defecto', () => {
        
        //*renderHook : nos sirve para probar contextos de un componente sin necesidad de ejecutar algun
        //*elemento del DOM
        const { result } = renderHook(() => useCounter() );

        const {counter, increment,decrement, reset } = result.current;

        expect(counter).toBe(10);  //Esperamos que renderice por defecto 10
        expect(increment).toEqual(expect.any(Function)); //esperemos que sea una funcion
        expect(decrement).toEqual(expect.any(Function));  //esperemos que sea una funcion
        expect(reset).toEqual(expect.any(Function));  //esperemos que sea una funcion


    });

    test('Debe de generar el counter con el valor de 100',()=>{

        const { result } = renderHook(() => useCounter(100) );
        const {counter } = result.current;

        expect(counter).toBe(100)
    })

    test('Debe de incrementar en 1 ',()=>{

        const { result } = renderHook(() => useCounter() );
        const { counter,increment } = result.current;
        
        act(() => {
           increment();
           increment(2);
          });

        
        
        expect(result.current.counter).toBe(13)
    })
    

    test('Debe de disminuir en 1 ',()=>{

        const { result } = renderHook(() => useCounter() );
        const { counter,decrement } = result.current;
        
        act(() => {
           decrement();
           decrement(2);
          });

        
        
        expect(result.current.counter).toBe(7)
    })

    test('Debe resetear el countador',()=>{

        const { result } = renderHook(() => useCounter() );
        const {  reset } = result.current;
        
        act(() => {
           reset();
          });

        
        
        expect(result.current.counter).toBe(10)
    })
    

});

