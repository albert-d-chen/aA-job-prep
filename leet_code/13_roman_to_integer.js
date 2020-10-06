// Given a roman numeral, convert it to an integer.

var romanToInt = function (s) {
    let hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let number = 0;

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] < hash[s[i + 1]] && s[i + 1] !== s.length - 1) {
            number -= hash[s[i]]
        } else {
            number += hash[s[i]]
        }
    }
    return number
};