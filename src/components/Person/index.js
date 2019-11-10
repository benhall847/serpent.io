import React from "react";
import globalContext from "globalContext";

const Person = ({ name, number }) => {
    const {
        dispatch,
        constants: { INCREMENT_NUMBER }
    } = React.useContext(globalContext);
    return (
        <>
            {`my name is ${name} my number is ${number}`}
            <button
                onClick={() => {
                    dispatch(INCREMENT_NUMBER, name);
                }}
            >
                Click me to increment!!
            </button>
        </>
    );
};

export default Person;
