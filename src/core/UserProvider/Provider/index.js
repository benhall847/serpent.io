import React from "react";
import reducer from "core/UserProvider/reducer";
import initialState from "core/UserProvider/initialState";
import * as constants from "core/UserProvider/constants";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
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
        <UserContext.Provider
            value={{
                userState: state,
                userDispatch: myDispatch,
                userConstants: constants
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
