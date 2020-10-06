// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            let str = strs[j];
            if (str[i] !== strs[0][i]) return str.slice(0, i)
        }
    }
    return strs[0];
};