function solution(S) {
    let arr = [];
    let hash = {};

    for (let i = 0; i < S.length; i++) {
        for (let j = i + 1; j < S.length + 1; j++) {
            arr.push(S.slice(i, j));
        }
    }

    let sorted = arr.sort((a,b) => a.length - b.length);
    for (let i = 0; i < arr.length; i++) {
        let substring = sorted[i];
        let balanced = true;
        if (substring.length < 2) {
            continue;
        }
        for (let j = 0; j < substring.length; j++) {
            let letter = substring[j];
            if (letter === letter.toLowerCase() && !substring.includes(letter.toUpperCase())) {
                balanced = false;
            }
            if (letter === letter.toUpperCase() && !substring.includes(letter.toLowerCase())) {
                balanced = false;
            }
            if (j === substring.length - 1 && balanced) {
                return substring.length;
            }
        }
    }
    return -1;
}

let string = 'azABaabza'
// let string = 'AcZCbaBz';
console.log(solution(string));