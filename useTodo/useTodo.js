import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
}

export const useTodo = () => {
    const [todoState, dispatchTodoAction] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify( todoState ))
      }, [todoState])

    const handleTodo = (value) => {
        const action = {
            type: "[TODO] Add todo",
            payload: value
        }
        dispatchTodoAction(action)
    };

    const handleDeleteTodo = ( id ) => {
        dispatchTodoAction({
            type: "[TODO] Delete todo",
            payload: id
        })
    };

    const handleToggle = ( id ) => {
        dispatchTodoAction({
            type: "[TODO] Check todo",
            payload: id
        })
    };

    const todosPending = todoState.filter(item => item.done === false).length
    const numTodo = todoState.length
  return ({
    todoState,
    todosPending,
    numTodo,
    handleDeleteTodo,
    handleTodo,
    handleToggle
  })
}

