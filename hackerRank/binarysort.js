function minMoves(arr) {
    // Write your code here

    let count = 0;
    let tracker = 0;
    let count2 = 0;
    let tracker2 = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === 0) {
                    count += 1;
                }
            }
            tracker = tracker + count;
            count = 0;
        } else if (arr[i] === 0) {
            
            continue;
        }
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 1) {
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] === 0) {
                    count2 += 1;
                }
            }
            tracker2 = tracker2 + count2;
            count2 = 0;
        } else if (arr[i] === 0) {
            
            continue;
        }
    }
    console.log(tracker, tracker2);
    if (tracker2 <= tracker) {
        return tracker2;
    } else {
        return tracker;
    }
}

let array = [1,0,0,1,0,1,1,0,0,1]
            

console.log(minMoves(array))