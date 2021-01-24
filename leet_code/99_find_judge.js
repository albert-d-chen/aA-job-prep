var findJudge = function(N, trust) {
    let hash = {};
    if (N === 1) return 1;
    for (let i = 0; i < trust.length; i++) {
        if (!hash[trust[i][1]]) {
            hash[trust[i][1]] = [];
        }
        
        hash[trust[i][1]].push(trust[i][0]);
        
    }
    
    let trusted = Object.keys(hash);
    let judge = -1;
    
    for (const key in hash) {
        if (hash[key].length === N - 1) {
            judge = key;
        }
    }
    
    for (let values of Object.values(hash)) {
        if (values.includes(parseInt(judge))) {
            return -1;
        }
    }
    
    return judge;
};