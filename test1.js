function solution(N) {
    let stringifiedN = N.toString();
    let copyN = stringifiedN;
    
    if (N < 0) {
        let results = Infinity;
        for (let i = 1; i < stringifiedN.length; i++) {
            let digit = parseInt(stringifiedN[i]);
            if (digit < 5) {
                continue;
            } else {
                // console.log('hit');
                copyN = copyN.slice(0, i) + '5' + copyN.slice(i);
                if (parseInt(copyN) > results || results === Infinity) {
                    results = parseInt(copyN);
                }
            }
        }
        return results;
    } else {
        let results = -Infinity;
        for (let i = 0; i < stringifiedN.length; i++) {
            let digit = parseInt(stringifiedN[i]);
            // console.log(copyN);
            if (digit > 5) {
                continue;
            } else {
                copyN = stringifiedN.slice(0, i) + '5' + stringifiedN.slice(i);
                // inserted = true;
                // console.log(parseInt(copyN))
                if (parseInt(copyN) > results) {
                    results = parseInt(copyN);
                }
                // copyN = stringfiedN;
            }
        }
        return results;
    }
// console.log(results);
    
    // let result = parseInt(copyN);
    // return result;
}
let N = -333;
console.log(solution(N))