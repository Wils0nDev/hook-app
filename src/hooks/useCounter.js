import { useState } from "react";




export const UseCounter = (counterObj) => {

    const [counter, setCounter] = useState(counterObj);
   
     const {counter1,counter2,counter3} = counter

     const increment = (value) =>{
        setCounter({
            ...counter,
            counter1:counter1 + value,

        })
    }

    const decrement = () =>{
        setCounter({
            ...counter,
            counter1:counter1 -1,

        })
    }

    const reset = () =>{
        setCounter(counterObj)
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
        
    }

