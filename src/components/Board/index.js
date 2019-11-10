import React, { useContext } from "react";
import SnakeContext from "SnakeContext";
import Row from "Row";

import styled from "styled-components";

const BoardWrapper = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
`;

const Board = () => {
    const { snakeState } = useContext(SnakeContext);
    return (
        <BoardWrapper>
            {snakeState.board.map((eaRow, i) => (
                <Row row={eaRow} key={i} />
            ))}
        </BoardWrapper>
    );
};

export default Board;
