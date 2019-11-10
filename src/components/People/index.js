import React, { useContext } from "react";
import Person from "components/Person/index";
import UserContext from "core/UserContext";
import SnakeContext from "core/SnakeContext";

const People = () => {
    const { userState } = useContext(UserContext);
    const { people } = userState;

    const { snakeState, snakeDispatch, snakeConstants } = useContext(
        SnakeContext
    );
    const { board } = snakeState;

    return (
        <>
            {people.map((person, indx) => {
                return (
                    <div key={indx}>
                        <Person name={person.name} number={person.number} />
                        {board.map((eaString, i) => (
                            <span key={i}>{eaString}</span>
                        ))}
                    </div>
                );
            })}
        </>
    );
};

export default People;
