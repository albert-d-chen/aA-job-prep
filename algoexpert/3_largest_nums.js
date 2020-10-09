function findThreeLargestNumbers(array) {
    // Write your code here.
    let ans = [];
    for (let i = 0; i < array.length; i++) {

        if (ans.length < 3) {
            ans.push(array[i]);
            ans.sort((a, b) => a - b);
        } else if (ans.length === 3) {
            ans.sort((a, b) => a - b);
            if (array[i] > ans[0]) {
                ans.shift();
                ans.unshift(array[i]);
            }
        }
    }
    return ans;
}

let arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
console.log(findThreeLargestNumbers(arr))