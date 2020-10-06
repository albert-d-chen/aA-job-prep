// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

var isValid = function (s) {
    let arr = [];
    let hash = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    for (i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            arr.push(s[i]);
        } else {
            let closing = arr.pop();
            if (s[i] !== hash[closing]) {
                return false;
            }
        }
    }
    if (arr.length !== 0) {
        return false;
    }
    return true;
};