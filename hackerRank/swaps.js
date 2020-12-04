function minSwaps(arr) {
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        while (arr[i] !== i - 1) {
            let temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
            count++;
        }
    }
    return count;
}

let arr = [3,1,2]
console.log(minSwaps(arr));