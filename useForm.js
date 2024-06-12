import { useState } from "react"


export const useForm = (initialValue = {}) => {

    const [formState, setFormState] = useState(initialValue)

    const onFormReset = () => {
      setFormState(initialValue);
    };

    const onInputChange = ({target}) => {
        const { name, value } = target;

        setFormState({
          ...formState,
          [name]: value
        })

      }
    return {
        onFormReset,
        ...formState,
        onInputChange,
        formState
    }
}
