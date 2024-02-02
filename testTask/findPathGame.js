const direction = {
    0: [4, 2],
    1: [1, 3],
    2: [4, 3],
    3: [2, 3],
    4: [1, 2],
    5: [4, 1],
};
const matrix = [
    // [0, 2, 0, 2],
    // [0, 1, 0, 1],
    // [0, 4, 0, 0],  

    [2, 3, 2],
    [1, 1, 1],
    [1, 1, 1],
    [4, 5, 4]
];

const validMoves = {
    1: 3,
    3: 1,
    4: 2,
    2: 4,
    5: 1,
};

function canMove(matrix, x = 0, y = 0, lastMove = 2, moves = []) {
    const first = matrix[0][0];

    const last = matrix[matrix.length - 1][matrix[0].length - 1];

    if (!(first === 0 || first === 2) || !(last === 0 || last === 4)) {
        return false;
    }

    const value = matrix[x][y];
    console.log(value)

    if (x === matrix.length - 1 || y === matrix[0].length - 1) {
        if (value === undefined) {
            return end;
        }
    }
    
    let [start, end] = direction[value];
    const startIndex = [start, end].indexOf(validMoves[lastMove]);

    //console.log("startIndex ", startIndex);

    if (startIndex < 0) {
        return false;
    }

    end = [start, end][[startIndex == 0 ? 1 : 0]];

    lastMove = end;

    moves.push(value);
    if (x === matrix.length - 1 && y === matrix[0].length - 1) {
        console.log("Moves:", moves);

    }

    if (end === 1) {
        x--;
    } else if (end === 2) {
        y++;
    } else if (end === 3) {
        x++;
    }
    else if (end === 4) {
        y--;
    }
    
    if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {
        return canMove(matrix, x, y, lastMove, moves);
    }

}

console.log(canMove(matrix));