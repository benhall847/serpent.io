import React from "react";
import reducer from "core/UserProvider/reducer";
import initialState from "core/UserProvider/initialState";
import * as constants from "core/UserProvider/constants";
import { useReducer } from "reinspect";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, "user");

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
