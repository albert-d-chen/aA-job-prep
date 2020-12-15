function directionReduction(directions) {
    let arr = [];
    let opposites = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST'
    }
    let reduced = false;


    for (let i = 0; i < directions.length; i++) {
        if (directions[i + 1] !== opposites[directions[i]]) {
            arr.push(directions[i]);
        } else {
            i++;
        }
    }

    return arr;
}


let arr = ['NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'SOUTH', 'NORTH', 'WEST']
console.log(directionReduction(arr))