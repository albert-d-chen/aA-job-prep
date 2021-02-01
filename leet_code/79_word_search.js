var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
            let letter = board[i][j];
            let wordCombo = '';
            wordCombo += letter
            return helper(i, j, wordCombo, word, board);
        }
    }
};

function helper(i, j, wordCombo, word, board) {
    let directions = [[-1, 0], [0, -1], [0, 1], [1, 0]]
    console.log(directions[0][0]);
    for (let k = 0; k < directions.length; k++) {

        if (directions[k][0] + i > board.length && directions[k][1] + j > board[0].length && directions[k][0] + i < board.length && directions[k][1] + j < board[0].length) {
            return false;
        }
        let moveX = directions[k][0] + i;
        let moveY = directions[k][1] + j;
        let nextLetter = board[moveX][moveY];
        wordCombo += nextLetter;

        if (wordCombo === word) {
            return true;
        } else {
            if (i === word.length - 1 && j === word.length - 1) {
                return false;
            }
            return helper(i, j, wordCombo, word);
        }

    }

}


let board = [['A', 'B', 'C', 'E'], 
             ['S', 'F', 'C', 'S'], 
             ['A', 'D', 'E', 'F']
    ]
let word = 'ABCB';
console.log(exist(board, word))