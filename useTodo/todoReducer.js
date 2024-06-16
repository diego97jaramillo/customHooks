export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add todo':
            return [...initialState, action.payload]
        case '[TODO] Delete todo':
            return initialState.filter( todo => todo.id !== action.payload )
        case '[TODO] Check todo':
            return initialState.map( item => {

                if (item.id === action.payload) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }

                return item
            })
        default:
            return initialState;
    }
}
