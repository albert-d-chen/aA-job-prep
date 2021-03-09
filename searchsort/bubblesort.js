function bubble(arr, cb) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i], arr[i + 1]) === 1) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                sorted = false;
            }
        }
    }
    return arr;
}


function cb(left, right) {
    if (left < right) {
        return 1;
    } else {
        return 0;
    }
}

let arr = [1,3,3,2,6];
console.log(bubble(arr, cb));
