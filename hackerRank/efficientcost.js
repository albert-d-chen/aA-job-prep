function calculateCost(arr, threshold) {
  // Write your code here
  let arrays = [];
  let allArr = [];
  let i = 1;
  
  let copy = arr.slice();
  
  while (i <= threshold) {
      while (copy.length > 0) {
          if (Number.isInteger(copy.length / i)) {
              arrays.push(copy.splice(0, i))
          }
      }
      
      allArr.push(arrays);
      arrays = [];
      copy = arr.slice();
      i++
  }
  console.log(allArr);
  
  let optimal = Infinity;
  for (let j = 0; j < allArr.length; j++) {
      let sum = 0;
      for (let k = 0; k < allArr[j].length; k++) {
          let max = Math.max(...allArr[j][k]);
          sum += max;
    }
    console.log(sum);
    if (sum < optimal) {
        optimal = sum;
    }
  }
//   return optimal;

}

console.log(calculateCost([1,5,2], 2));
