function merge(arr1) {
    let arr = [];
    let merged = true;

    // while (!merged) {
    //     merged = false;
        for (let i = 0; i < arr1.length - 1; i++) {
            let first = arr1[i];
            let next = arr1[i + 1];
            if (first[1] >= next[0] && first[1] <= next[1]) {
                first[1] = next[1];
                arr1.splice(i + 1, 1);
            }
        }
    // }
    return arr1;
}

let arr1 = [[1,3], [2,4], [5,7]];

console.log(merge(arr1))