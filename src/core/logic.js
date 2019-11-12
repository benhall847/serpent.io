export const snake = {
    direction: 'UP',
    lastDirection: 'UP',
    location: [
        {
            column: 10,
            row: 14,
        },
        {
            column: 10,
            row: 15,
        },
        {
            column: 10,
            row: 16,
        },
    ],
};

export const createBoard = () => {
    const boardHeight = 30;
    const boardWidth = 20;
    let board = [];
    for (let y = 0; y < boardHeight; y++) {
        let row = [];
        for (let x = 0; x < boardWidth; x++) {
            const { location } = snake;
            const result = false;

            location.forEach((locator) => {
                if (locator.column === x && locator.row === y) {
                    result = true;
                }
            });

            row.push({ x: x, y: y, hasFood: false, hasSnake: result });
        }
        board.push(row);
    }
    return board;
};
