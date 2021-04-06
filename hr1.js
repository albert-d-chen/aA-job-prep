// function arrComb(arr) {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         let sub = [arr[i]];
//         for (let j = i + 1; j < arr.length; j++) {
//             sub.push(arr[j]);
//             array.push(sub);
//         }
        
//     }
//     return array;
// }

// let arr = [1,2,3,4,5]
// console.log(arrComb(arr));


function combinations(array) {
  return new Array(1 << array.length).fill().map(
    (e1, i) => array.filter((e2, j) => i & 1 << j));
}

console.log(combinations([1, 2, 3]))