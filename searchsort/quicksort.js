function quicksort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];

    let left = arr.slice(1).filter(ele => ele <= pivot);
    let right = arr.slice(1).filter(ele => ele > pivot);
    left = quicksort(left);
    right = quicksort(right);

    return left.concat([pivot], right);
}

let arr = [1,5,4,3,2]
console.log(quicksort(arr))