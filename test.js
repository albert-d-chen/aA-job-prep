function solution(S) {
    var occurrences = new Array(26);
    for (var i = 0; i < occurrences.length; i++) {
        occurrences[i] = 0;
    }

    for (var id in S) {
        occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
    }
    console.log(occurrences);
    var best_char = 'a';
    var best_res  = 0;

    for (var i = 1; i < 26; i++) {
        if (occurrences[i] >= best_res) {
            best_char = String.fromCharCode('a'.charCodeAt(0) + i);
            best_res  = occurrences[i];
            // console.log(best_char, occurrences[i])
        }
    }

    return best_char;
}

let S = 'aaaa'
console.log(solution(S));