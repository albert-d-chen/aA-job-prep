function mountain(arr) {
    if (arr.length < 3) return 0;
    let current = 0;
    let max = 0;
    let decreasing = false;
    let increasing = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            increasing = true;
            current++;
        }
        if (arr[i + 1] < arr[i] && increasing) {
            decreasing = true;
            current++;
        }
        if (arr[i + 1] < arr[i] && i + 1 === arr.length - 1) {
            current++;
        }
        
        if (increasing && decreasing) {
            // console.log(current, i)
            max = Math.max(max, current);
        }
        
        if (arr[i] < arr[i + 1] && decreasing) {
            current = 0;
            i--;
            decreasing = false;
            increasing = false;
        }

        if (arr[i] === arr[i + 1]) {
            current = 0;
            decreasing = false;
            increasing = false;
        }

    }
    
    return max;
}

let arr = [0, 2, 0, 2, 1, 2, 3, 4, 4, 1];
let arr1 = [875, 884, 239, 731, 723,685];
let arr2 = [0,0,1,0,0,1,1,1,1,1];
console.log(mountain(arr2));