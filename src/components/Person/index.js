import React from "react";
import UserContext from "core/UserContext";

const Person = ({ name, number }) => {
    const {
        userDispatch,
        userConstants: { INCREMENT_NUMBER }
    } = React.useContext(UserContext);
    return (
        <>
            {`my name is ${name} my number is ${number}`}
            <button
                onClick={() => {
                    userDispatch(INCREMENT_NUMBER, name);
                }}
            >
                Click me to increment!!
            </button>
        </>
    );
};

export default Person;
