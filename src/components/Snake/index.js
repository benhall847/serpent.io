import React, { useEffect } from 'react';
import Board from 'Board';
import UserContext from 'UserContext';
import styled from 'styled-components';
import SnakeContext from 'SnakeContext';

const SnakeWrapper = styled.div`
    width: 98vw;
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

const keyPressHandler = ({ key, repeat }, snakeDispatch, { SET_DIRECTION, LEFT, RIGHT, UP, DOWN }) => {
    switch (key) {
        case 'ArrowLeft':
            if (repeat != true) {
                snakeDispatch(SET_DIRECTION, LEFT);
            }
            break;
        case 'ArrowRight':
            if (repeat != true) {
                snakeDispatch(SET_DIRECTION, RIGHT);
            }
            break;
        case 'ArrowUp':
            if (repeat != true) {
                snakeDispatch(SET_DIRECTION, UP);
            }
            break;
        case 'ArrowDown':
            if (repeat != true) {
                snakeDispatch(SET_DIRECTION, DOWN);
            }
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
        window.addEventListener('keydown', (e) => {
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
