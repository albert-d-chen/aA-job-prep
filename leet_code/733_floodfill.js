var floodFill = function(image, sr, sc, newColor) {
    
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let queue = [[sr, sc]];
    let startingColor = image[sr][sc];
    
    if (startingColor === newColor) {
        return image;
    }
    
    while (queue.length !== 0) {
        let current = queue.shift();
        
        if (startingColor === image[current[0]][current[1]]) {
            image[current[0]][current[1]] = newColor;
            
            for (let i = 0; i < directions.length; i++) {
                let direction = directions[i];
                let row = current[0] + direction[0];
                let col = current[1] + direction[1];
                
                if (row >= 0 && col >= 0 && row < image.length && col < image[0].length) {
                    queue.push([row,col]);
                }
                
            }
        }
    }
    
    return image;
    
};