function codingScoreReportPercent(values) {
    let hash = {}
    
    let scores = values.sort((a,b) => b - a);

    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];

        if (score >= 800) {
            if (!hash['Elite']) {
                hash['Elite'] = 0;
            }
            hash['Elite'] += 1;
        } else if (score >= 750 && score <= 799) {
            if (!hash['Excellent']) {
                hash['Excellent'] = 0;
            }
            hash['Excellent'] += 1;
        } else if (score >= 700 && score <= 749) {
            if (!hash['Good']) {
                hash['Good'] = 0;
            }
            hash['Good'] += 1;
        } else if (score >= 600 && score <= 699) {
            if (!hash['Fair']) {
                hash['Fair'] = 0;
            }
            hash['Fair'] += 1;
        } else if (score >= 300 && score <= 599) {
            if (!hash['Poor']) {
                hash['Poor'] = 0;
            }
            hash['Poor'] += 1;
        } 
    }

    let rank = Object.keys(hash);
    rank.sort((a,b) => hash[b] - hash[a] )
 
    let result = [];
    let j = 0;

    while (result.length < rank.length) {
        let key = rank[j]
        let percent = (hash[rank[j]]/ scores.length * 100).toFixed(2)
        result.push(`${key}: ${percent}%`);
        j++
    }
 
    return result;
}

let scores = [330, 723, 730, 825];
console.log(codingScoreReportPercent(scores))

// good: 50%, elite: 25%, poor: 25%