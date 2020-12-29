var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU';
    
    let left = 0;
    let right = s.length - 1;
    
    let split = s.split('');
    
    while (left < right) {
        if (vowels.includes(split[left]) && vowels.includes(split[right])) {
            [split[left], split[right]] = [split[right], split[left]];
            left++;
            right--;
        }
        if (!vowels.includes(split[left])) {
            left++;
        } else if (!vowels.includes(split[right])) {
            right--;
        }
    }
    return split.join('');
};

let s = 'hello';
console.log(reverseVowels(s));