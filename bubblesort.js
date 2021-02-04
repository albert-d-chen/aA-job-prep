function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
}

function bubbleSort(array) {
    let sorted = false;
    let count = 0;

    while(!sorted) {
        sorted = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]){
                swap(array, i, i + 1)
                sorted = false;
                count++
            }
        }
    }
    return count;
}

console.log(bubbleSort([8,22,7,9,31,19,5,13]))
