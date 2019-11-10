import React, { useEffect } from "react";
import Board from "Board";
import UserContext from "UserContext";
import styled from "styled-components";
import SnakeContext from "SnakeContext";

const SnakeWrapper = styled.div`
    width: 100vw;
    height: 80vh;
`;

const BoardWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const keyPressHandler = (
    { key },
    snakeDispatch,
    { SET_DIRECTION, LEFT, RIGHT, UP, DOWN }
) => {
    console.log(SET_DIRECTION);
    switch (key) {
        case "ArrowLeft":
            snakeDispatch(SET_DIRECTION, LEFT);
            break;
        case "ArrowRight":
            snakeDispatch(SET_DIRECTION, RIGHT);
            break;
        case "ArrowUp":
            snakeDispatch(SET_DIRECTION, UP);
            break;
        case "ArrowDown":
            snakeDispatch(SET_DIRECTION, DOWN);
            break;
        default:
            break;
    }
};

const Snake = () => {
    const { userState } = React.useContext(UserContext);
    const { people } = userState;
    const { snakeConstants, snakeDispatch } = React.useContext(SnakeContext);
    const { MOVE_SNAKE } = snakeConstants;

    const gameLoop = () => {
        setInterval(() => {
            snakeDispatch(MOVE_SNAKE);
        }, 150);
    };

    useEffect(() => {
        window.addEventListener("keydown", e => {
            keyPressHandler(e, snakeDispatch, snakeConstants);
        });
        gameLoop();
    }, []);

    return (
        <SnakeWrapper>
            <h1>{people[0].name}</h1>
            <BoardWrapper id="board-wrapper">
                <Board />
            </BoardWrapper>
        </SnakeWrapper>
    );
};

export default Snake;
