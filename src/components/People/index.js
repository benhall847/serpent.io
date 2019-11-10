import React from "react";
import Person from "components/Person/index";
import globalContext from "globalContext";

const People = () => {
    const { state } = React.useContext(globalContext);
    const { people } = state;

    return (
        <>
            {people.map((person, indx) => {
                return (
                    <Person
                        name={person.name}
                        key={indx}
                        number={person.number}
                    />
                );
            })}
        </>
    );
};

export default People;
