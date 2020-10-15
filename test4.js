function evenSubarray(numbers, k) {
  // Write your code here
 let count = 0;
 let arr  = [];

 for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length + 1; j++) {
        if (!arr.some(ele => String(ele) === String(numbers.slice(i,j)))) {
            arr.push(numbers.slice(i, j));
        }
    }
 }
console.log(arr);

 for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
         if (isOdd(arr[i][j])){
             count += 1;
         }

         if (count > k) {
             arr.splice(i, 1);
         }
     }
     count = 0;
 }
  return arr.length;
}

function isOdd(num) {
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    }
}
console.log(evenSubarray([6,3,5,8], 1))