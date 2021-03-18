function binary(arr, target) {
    let midIdx = Math.floor(arr.length / 2);
    let mid = arr[midIdx];

    if (arr.length === 0) return -1;
    if (mid === target) return midIdx;

    if (mid > target) {
        let left = arr.slice(0, midIdx);
        return binary(left, target);
    } else if (mid < target) {
        let right = arr.slice(midIdx + 1);
        let sortedRight = binary(right, target);
        if (sortedRight === -1) {
            return -1;
        } else {
            return sortedRight + 1 + midIdx;
        }
    } 
}

function binary2(arr, x) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

let arr = [1,3,5,7,8,9]
let target =3;
console.log(binary(arr, target))