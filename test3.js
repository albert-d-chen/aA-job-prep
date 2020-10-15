function countMoves(numbers) {
  // Write your code here

  let count = 0;
  let check = false;

  while (!check) {
    let max = Math.max.apply(null, numbers);
    let maxIdx = numbers.indexOf(max);
    console.log(max);

    for (let i = 0; i < numbers.length; i++) {
      if (i === maxIdx) {
        continue;
      } else {
        numbers[i] += 1;
      }
    }
    count += 1;

    if (numbers.every((num) => num === numbers[0])) {
        check = true;
    }
    
  }
  return count;
}

let numbers = [3,2,2,2]
console.log(countMoves(numbers));