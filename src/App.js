import React from 'react';
import './App.css';
import styled from 'styled-components';
import useSerpent from './useSerpent';
import Board from './components/Board';


let state;
let dispatch;
let actionCreator;

const makeBoard = () => {
  const boardHeight = 30;
  const boardWidth = 20;

  let board = [];
  for(let y = 0; y < boardHeight; y++ ) {
    let row = [];
    for(let x = 0; x < boardWidth; x++) {
      row.push({x: x, y: y, hasFood: false, hasSnake: false});
    }
    board.push(row);
  }
  return board;
};

const createSerpent = (state, dispatch, actionCreator) => {
  const { snake: { location }} = state;
  console.log(state, '!!!!!');
  let newBoard = state.board;
  location.forEach((locator)=>{
    const {row, column} = locator;
    if(newBoard && newBoard[row-1] && newBoard[row-1][column-1]) {
          newBoard[row - 1][column - 1].hasSnake = true;

    }
  })

    dispatch(actionCreator('createBoard', newBoard))
}
const initialState = {
  board : makeBoard(),
  snake: {
    direction: 'up',
    location: [ 
                {
                  column: 10,
                  row: 14
                },
                {
                  column:10,
                  row: 15
                },
                {
                  column:10,
                  row: 16
                },
              ],
  },
  gameSpeed: 100,
}


function App() {
  ({state, dispatch, actionCreator} = useSerpent(initialState));
  createSerpent(state, dispatch, actionCreator);
  return (
    <div className="App">
        <h1>Serpentio</h1>
        <Board state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
