function solution(numbers) {
    let subarrays = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length + 1; j++) {
            subarrays.push(numbers.slice(i, j));
        }
    }
    let set = new Set(subarrays)
    return set;
}
let arr = [1,2,1,3,4]
console.log(solution(arr));