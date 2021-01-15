function combinations () {
    let count = 0;
    let board = [
        [], [], [],
        [], [], [],
        [], [], [],
    ]

    for (let i = 0; i < board.length; i++) {
        let newBoard = [...board]
        newBoard[i][0] = 'X';
        // console.log(newBoard);
        count += fill(newBoard, count, 'O');
        // board = [
        //     [], [], [],
        //     [], [], [],
        //     [], [], [],
        // ]
    }
    return count;
}

function fill(board, count, move) {
    let nextMove;
    console.log(count);

    if (won(board, move) || full(board)) {
        count++;
        return count;
    }

    if (move === 'X') {
        nextMove = 'O';
    } else {
        nextMove = 'X';
    }

    for (let i = 0; i < board.length; i++) {
        board[i + 1][0] = nextMove;
        count += fill(board, count, nextMove);
    }

    return count;
}

function full(board) {
    for (let j = 0; j < board.length; j++) {
        if (board[j][0] === undefined) {
            return false;
        }
    }
    return true;
}

function won(board, move) {
    
    let horiz = [0,3,6].map(i => {
        return ([i, i + 1, i + 2])
    })
    let vert = [0,1,2].map(i => {
        return ([i, i + 3, i + 6])
    })
    let diag = [[0, 4, 8], [2, 4, 6]];

    let winCond = [].concat(horiz).concat(vert).concat(diag);
    
    let result = winCond.some(indices => {
        return board[indices[0]][0] === move && board[indices[1]][0] === move && board[indices[2]][0] === move;
    })

    return result;
}

let board = [
            ['X'], [], [],
            [], [], [],
            [], [], [],
        ];


let count = 0;
let move = 'X';
console.log(combinations());
// console.log(won(board, 'X'));
// console.log(full(board));
// console.log(fill(board, count, move));