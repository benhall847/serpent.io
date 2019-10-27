import React from 'react';
import styled from 'styled-components';
import BoardRow from './BoardRow';

const BoardWrapper = styled.div`
    height:90vh;
    width:100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`;

const Board = ({state, dispatch}) => {
    console.log(state.board);
  return (
      <BoardWrapper id="board-wrapper">
          {state.board.map((row, i)=> (<BoardRow row={row} key={i}/>))}
      </BoardWrapper>
  )
}

export default Board;