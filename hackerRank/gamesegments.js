function playSegments(coins) {
  // Write your code here

  let hash = {};
  hash[0] = 0;

  for (let i = 1; i < coins.length; i++) {
    if (!hash[i]) {
      hash[i] = 0;
    }
    if (coins[i] === 1) {
      hash[i] += hash[i - 1] + 1;
    } else if (coins[i] === 0) {
      hash[i] -= 1;
    }
  }
  
  let max =  Math.max(...Object.values(hash));
  let moves = Object.keys(hash).filter(ele => max === hash[ele])
//   console.log(moves);
  return moves[0];
}

console.log(playSegments([1,0,0,1,0]))

const hash = { Apple: 2, Orange: 1, Mango: 2 };

const max = Object.keys(hash).reduce((a, v) => Math.max(a, hash[v]), -Infinity);
const result = Object.keys(hash).filter((v) => hash[v] === max);

console.log(result);