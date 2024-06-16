import { useState } from "react"



export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)
    const incrementar = (value) => {
        setCounter(counter + value)
    }

    const reducir = (value) => {
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        reset,
        incrementar,
        reducir
    }
}
