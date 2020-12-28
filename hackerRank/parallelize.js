
function minTime(files, numCores, limit) {
    // Write your code here
    
    // files that add to number divisible by numCores
    // max number of files that can be added together

    let sortedFiles = files.sort((a,b) => b - a);
    let limitCopy = limit;

    while (limitCopy > 0) {
        for (let i = 0; i < sortedFiles.length; i++) {

        }
    }
    let array = []
    for (let i = 0; i < files.length; i++) {
        array[i] = new Array(files.length).fill(0);
    }
    let parallelized = false;
    
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < files.length; i++) {
            if (files[i] % numCores === 0 && parallelized === false) {
                array[j][i] = files[i] / numCores;
                parallelized = true;
                // files.push(files.shift());
            } else {
                array[j][i] = files[i];
            }
        }
        parallelized = false;
    }
    console.log(array);
    
    let sums = [];
    
    for (let i = 0; i < array.length; i++) {
        sums [i] = array[i].reduce((a,b) => a + b, 0)
    }
    console.log(sums);
    return Math.min(...sums);
}

let files1 = [130291875, 474356040, 1, 8];
let numCores1 = 5;
let limit1 = 3;
//120929592
let files2 = [3, 1, 5];
let numCores2 = 1;
let limit2 = 5;
//9
console.log(minTime(files1, numCores1, limit1))

