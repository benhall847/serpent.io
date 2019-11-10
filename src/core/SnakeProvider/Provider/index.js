import React from "react";
import reducer from "core/SnakeProvider/reducer";
import initialState from "core/SnakeProvider/initialState";
import * as constants from "core/SnakeProvider/constants";
import { useReducer } from "reinspect";

export const SnakeContext = React.createContext();

const SnakeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, "snake");

    const myDispatch = (type, payload) => {
        //  this if() statement lets you use dispatch as..
        // dispatch(INCREMENT_NUMBER, name);
        // or dispatch({type: INCREMENT_NUMBER, payload: name});

        if (typeof type === "object" && type != null) {
            dispatch(type);
        }
        dispatch({ type, payload });
    };

    return (
        <SnakeContext.Provider
            value={{
                snakeState: state,
                snakeDispatch: myDispatch,
                snakeConstants: constants
            }}
        >
            {children}
        </SnakeContext.Provider>
    );
};

export default SnakeProvider;
