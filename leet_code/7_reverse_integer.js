// Given a 32 - bit signed integer, reverse digits of an integer.

var reverse = function (x) {
    let arr = x.toString().split('').reverse();

    if (arr[arr.length - 1] === '-') {
        arr.unshift(arr.pop())
    }
    let ans = arr.join('');

    if (ans >= Math.pow(-2, 31) && ans <= Math.pow(2, 31) - 1) {
        return ans;
    } else {
        return 0;
    }
};