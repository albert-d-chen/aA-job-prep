function combinations () {
    let count = 0;
    let board = [
        [''], [''], [''],
        [''], [''], [''],
        [''], [''], [''],
    ]
    let newBoard = [...board];

    for (let i = 0; i < board.length; i++) {
        let newBoard = [...board]
        newBoard[i][0] = 'X';
        count += fill(newBoard, count, 'O');
    }
    return count;
}

function fill(board, count, move) {
    if (won(board, move) || full(board)) {
        console.log(board);
        count++;
        return count;
    }
    let newBoard = [...board];

    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === '') {
            let nextMove;
            board[i][0] = move;
            // let newBoard = [...board];
            if (move === 'X') {
                nextMove = 'O';
            } else {
                nextMove = 'X';
            }
            // console.log(newBoard, board, count)
            count += fill(newBoard, count, nextMove);
            count += fill(board, count, nextMove);
        }
        
    }

    return count;
}

function full(board) {
    for (let j = 0; j < board.length; j++) {
        if (board[j][0] === '') {
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





// function combinations () {
//     let count = 0;
//     let board = [
//         '', '', '',
//         '', '', '',
//         '', '', '',
//     ]
//     // let board = new Array(9).fill('');

//     for (let i = 0; i < board.length; i++) {
//         let newBoard = [...board];
//         newBoard[i] = 'X';
//         // console.log(board, newBoard);
//         count += fill(newBoard, count, 'O');
//     }
//     return count;
// }

// function fill(board, count, move) {
//     if (won(board, move) || full(board)) {
//         count++;
//         return count;
//     }

//     for (let i = 0; i < board.length; i++) {
//         let newBoard = [...board];

//         if (board[i] === '') {
//             let nextMove;
//             board[i] = move;

//             if (move === 'X') {
//                 nextMove = 'O';
//             } else {
//                 nextMove = 'X';
//             }
            
//             count += fill(newBoard, count, nextMove);
//             count += fill(board, count, nextMove);
//         }
        
//     }

//     return count;
// }

// function full(board) {
//     for (let j = 0; j < board.length; j++) {
//         if (board[j] === '') {
//             return false;
//         }
//     }
//     return true;
// }

// function won(board, move) {
    
//     let horiz = [0,3,6].map(i => {
//         return ([i, i + 1, i + 2])
//     })
//     let vert = [0,1,2].map(i => {
//         return ([i, i + 3, i + 6])
//     })
//     let diag = [[0, 4, 8], [2, 4, 6]];

//     let winCond = [].concat(horiz).concat(vert).concat(diag);
    
//     let result = winCond.some(indices => {
//         return board[indices[0]] === move && board[indices[1]] === move && board[indices[2]] === move;
//     })

//     return result;
// }

let board = [
            'O', 'X', 'O',
            'X', 'O', 'X',
            'X', 'O', '',
        ];


let count = 0;
let move = 'X';
console.log(combinations());
// console.log(won(board, 'O'));
// console.log(full(board));
// console.log(fill(board, count, move));

