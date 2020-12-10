function pairs(nums) {
    let num = nums % 60;
    let compliment = num ? 60 - num : 0;
    return compliment;
}

console.log(pairs(60));