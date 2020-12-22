function directionReduction(directions) {
    let arr = [];
    let opposites = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST'
    }
    let reduced = false;

    while (!reduced) {
        reduced = true;
        for (let i = 0; i < directions.length; i++) {
            if (directions[i + 1] === opposites[directions[i]]) {
                directions.splice(i, 2);
                i--;
                reduced = false;
            } 
        }
    }

    return directions;
}


let arr = ['EAST','NORTH', 'WEST', 'SOUTH']
let arr2 = ['NORTH', 'EAST', 'WEST','SOUTH', 'WEST', 'SOUTH','NORTH', 'WEST']
console.log(directionReduction(arr2))