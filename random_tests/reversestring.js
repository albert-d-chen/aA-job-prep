function reverse(s) {
    let string = '';

    for (let i = s.length - 1; i >= 0; i--) {
        string += s[i];
    }
    return s;
}

let s = 'hello'
console.log(reverse(s));