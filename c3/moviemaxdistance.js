var maxDistToClosest = function(seats) {
    let current = 0;
    let max = 0;
    let start = false;
    
    for (let i = 0; i < seats.length; i++) {
        let seat = seats[i];
        if (seat === 0) {
            current++;
        } else if (seat === 1) {
            if (start === true) {
                if (current > max) {
                    max = current;
                    start = false;
                    current = 0;
                } else {
                    current = 0;
                    start = false;
                }
            } else {
                if (Math.ceil(current / 2) > max) {
                    max = Math.ceil(current / 2);
                    current = 0;
                } else {
                    current = 0;
                }
            }
            // console.log('max:', max, 'current:', current);
        }
        
        if (seat === 0 && i === 0) {
            start = true;
        } else if (seat === 0 && i === seats.length - 1) {
            if (current > max) {
                max = current;
            }
        }
        
    }
    
    return max;
};

function maxDist (seats) {
    let max = 0;
    let prev = -1;

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            if (prev === -1) {
                max = i;
            } else {
                max = Math.max(max, Math.floor((i - prev) / 2))
            }
            prev = i;
        }
    }

    if (prev === seats.length - 1) {
        return max;
    } else {
        return Math.max(max, seats.length - 1 - prev)
    }
}
let arr1 = [0,1,0,1,0];
let arr2 = [0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1]

console.log(maxDist(arr1))