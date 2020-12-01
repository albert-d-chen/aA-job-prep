// function isSlice(s) {
//     return s.slice(0)
// }

// console.log(isSlice('ac'))


function isPalin(s) {
    let string = s;
    if (s.length % 2 !== 0) {
        let mid = Math.floor(s.length / 2)
        string = string.slice(0,mid) + string.slice(mid + 1);
    }
    let left = 0;
    let right = string.length - 1;
    while (left <= right) {
        console.log(string);
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let st = 'cb'
console.log(isPalin(st))