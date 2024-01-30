const direction = {
    0: [4, 2],
    1: [1, 3],
    2: [4, 3],
    3: [2, 3],
    4: [1, 2],
    5: [1, 4],
};
const matrix = [
    [0, 2, 0, 2],
    [0, 1, 0, 1],
    [0, 4, 0, 0],
];
function correctInput(startDirection, finalExit) {
    const validMoves = {
        1: [3],
        3: [1],
        4: [2],
        2: [4],
        5: [1]
    };
    return validMoves[finalExit] && validMoves[finalExit].includes(startDirection);
}
function canMove(matrix, x = 0, y = 0, lastMove = 2, moves = []) {
    const value = matrix[x][y];
    const [start, end] = direction[value];
    if (!correctInput(start, lastMove)) {
        return false;
    }
    lastMove = end;
    moves.push(value);
    if (x === matrix.length - 1 && y === matrix[0].length - 1) {
        console.log("Moves:", moves);
        return true;
    }
    if (end === 0 || end === 3 || end === 4) {
        x++;
    } else if (end === 1 || end === 2) {
        y++;
    } else if (end === 5) {
        x--;
    }
    if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {
        return canMove(matrix, x, y, lastMove, moves);
    } else {
        return false;
    }
}
if (!canMove(matrix)) {
    console.log("Cannot reach exit.");
}