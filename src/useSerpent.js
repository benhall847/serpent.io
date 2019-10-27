import {useReducer} from 'react';

export const reducer = (state, action) => {
    switch (action.type){
        case 'setUsername':
            return {...state, 'username': action.payload };
        case 'setPassword':
            return {...state, 'password': action.payload };
        case 'makeBoard':
            console.log(action);
            return {...state, 'board': action.payload };
        default:
            return state;
    }
}

export const actionCreator = (action, payload) => ({type:action, payload});

const useSerpent = (initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return {
        state,
        dispatch,
        actionCreator
    }
}

export default useSerpent;