
function stringAnagram(dictionary, query) {
    // Write your code here
    let obj = {};
    
    for (let i = 0; i < query.length; i++) {
        if (!obj[query[i]]) {
            obj[query[i]] = 0;
        }
        for (let j = 0; j < dictionary.length; j++) {
            if (isAnagram(query[i], dictionary[j])) {
                obj[query[i]] += 1;
            }
        }
    }

    return Object.values(obj);
}

function isAnagram(word1, word2) {
    let hash = {};
    
    if (word1.length !== word2.length) return false;
    
    for (let i = 0; i < word1.length; i++) {
        if (!hash[word1[i]]) {
            hash[word1[i]] = 0
        }
        hash[word1[i]]++;
    }
    
    for (let i = 0; i < word2.length; i++) {
        if (!hash[word2[i]]) {
            hash[word2[i]] = 0
        }
        hash[word2[i]]--;
    }
    
    return Object.values(hash).every((key) => key === 0);
}

let dictionary = ['heater', 'cold', 'clod', 'reheat', 'docl']
let query = ['codl', 'heater', 'abcd'];
//[3,2,0]

let dictionary2 = ['listen', 'tow', 'silent', 'lisent', 'two', 'abc', 'no', 'on']
let query = ['two', 'bca', 'no', 'listen']
//[2,1,2,3]