import React from "react";
import reducer from "core/reducer";
import initialState from "core/initialState";
import * as constants from "core/constants";

export const GlobalContext = React.createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const myDispatch = (type, payload) => {
        //  this if() statement lets you use dispatch as..
        // dispatch(INCREMENT_NUMBER, name);
        // or dispatch({INCREMENT_NUMBER, name});

        if (typeof type === "object" && type != null) {
            dispatch(type);
        }
        dispatch({ type, payload });
    };

    return (
        <GlobalContext.Provider
            value={{ state, dispatch: myDispatch, constants }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default Provider;
