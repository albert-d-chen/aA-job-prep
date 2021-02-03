var orangesRotting = function(grid) {
    let time = 0;
    let directions = [[-1,0], [0, -1], [1, 0], [0, 1]];
    let freshOranges = 0;
    let rottenOranges = [];
    
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                freshOranges++;
            }
            if (grid[i][j] === 2) {
                rottenOranges.push([i,j])
            }
        }
    }
    
    while (rottenOranges.length && freshOranges) {
        let queue = [];
        while(rottenOranges.length) {
            let current = rottenOranges.pop();
            for (let direction of directions) {
                let row = current[0] + direction[0];
                let col = current[1] + direction[1];
                if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length) {
                    if (grid[row][col] === 1) {
                        grid[row][col] = 2;
                        freshOranges -= 1;
                        queue.push([row, col]);
                    }
                }
            }
        }
        time++;
        rottenOranges = queue;
    }
    
    return freshOranges ? -1 : time;
};