import { MOVE_SNAKE, UP, DOWN, LEFT, RIGHT, SET_DIRECTION, SET_CLICK_COUNTER } from './constants';

const reducer = (state, action) => {
    switch (action.type) {
        case MOVE_SNAKE:
            const newLocation = state.snake.location;
            let newLastDirection = state.snake.lastDirection;
            const newBoard = state.board;
            const lastCell = newLocation[newLocation.length - 1];

            if (lastCell && newBoard[lastCell.row] && newBoard[lastCell.row][lastCell.column]) {
                newBoard[lastCell.row][lastCell.column].hasSnake = false;
                newLocation.pop();
                if (state.snake.direction === UP) {
                    newLastDirection = UP;
                    newLocation.unshift({
                        column: newLocation[0].column,
                        row: newLocation[0].row - 1,
                    });
                } else if (state.snake.direction === DOWN) {
                    newLastDirection = DOWN;
                    newLocation.unshift({
                        column: newLocation[0].column,
                        row: newLocation[0].row + 1,
                    });
                } else if (state.snake.direction === LEFT) {
                    newLastDirection = LEFT;
                    newLocation.unshift({
                        column: newLocation[0].column - 1,
                        row: newLocation[0].row,
                    });
                } else if (state.snake.direction === RIGHT) {
                    newLastDirection = RIGHT;
                    newLocation.unshift({
                        column: newLocation[0].column + 1,
                        row: newLocation[0].row,
                    });
                }
            }
            const firstCell = newLocation[0];
            if (firstCell && newBoard[firstCell.row] && newBoard[firstCell.row][firstCell.column]) {
                newBoard[firstCell.row][firstCell.column].hasSnake = true;
            }
            return {
                ...state,
                board: newBoard,
                snake: {
                    ...state.snake,
                    lastDirection: newLastDirection,
                    location: newLocation,
                },
            };
        case SET_DIRECTION:
            const { clickCounter } = state;
            const { lastDirection } = state.snake;
            const { payload } = action;
            if (
                (lastDirection === UP && payload === DOWN) ||
                (lastDirection === DOWN && payload === UP) ||
                (lastDirection === LEFT && payload === RIGHT) ||
                (lastDirection === RIGHT && payload === LEFT)
            ) {
                return state;
            }
            return {
                ...state,
                snake: { ...state.snake, direction: payload },
            };
        default:
            return state;
    }
};
export default reducer;
