function mergeSort(arr) {
    let half = arr.length / 2

    if (arr.length < 2) {
        return arr;
    }
    let left = arr.splice(0, half);
    console.log(left, arr);
    return merge(mergeSort(left), mergeSort(arr))
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0] ) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left,right);
}

let arr = [4,8,7,2,11,1,3];
console.log(mergeSort(arr));