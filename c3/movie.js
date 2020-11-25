// function minSpace(array) {
//     let min = 0;
//     let minIdx = 0;
//     let current = 0;

//     for (let i = 0; i < array.length; i++) {
//         let ele = array[i];
//         if (ele === 1) {
//             for (let j = i + 1; j < array.length; j++) {
//                 if (array[j] === 1){
//                     if (current > min) {
//                         min = current;
//                         minIdx = Math.ceil(current / 2) + i;
//                         current = 0;
//                         // min = 0;
//                         i = j + 1;
//                         break;
//                     } else {
//                         current = 0;
//                     }
//                 } else if (array[j] === 0) {
//                     current++;
//                 }
//             }
//         } 
//     } 
//     return minIdx;
// }

arr1 = [1,0,0,0,1,1,0,0,1,0,0, 0,0,0,1,0,0,0,0,0,0];
arr2 = [1,0,0,0,0,0,1]
arr3 = [0,0, 0,0,1,0,0,0,0,0,1,0,0,0,0,0,0];
arr4 = [0,1];
console.log(min(arr4))

function min(array) {
    let currentDistance = 0;
    let maxDistance = 0;
    let idx = 0;
    let start = false;

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (ele === 0) {
            currentDistance++;
        } else if (ele === 1) {
            if (start === true) {
                if (currentDistance > maxDistance) {
                    idx = 0;
                    maxDistance = currentDistance * 2;
                    currentDistance = 0;
                    start = false;
                } else {
                    currentDistance = 0;
                    start = false;
                }
            } else {
                if (currentDistance > maxDistance) {
                    idx = Math.ceil(currentDistance / 2) + i - currentDistance - 1;
                    maxDistance = currentDistance;
                    currentDistance = 0;
                    start = false;
                } else {
                    currentDistance = 0;
                }
            }
        } 
        if (ele === 0 && i === 0) {
            start = true;
        } else if (ele === 0 && i === array.length - 1) {
            if (currentDistance > maxDistance / 2) {
                idx = array.length - 1;
                maxDistance = currentDistance;
                currentDistance = 0;
            } else {
                currentDistance = 0;
            }
        }
    }

    return idx;
}