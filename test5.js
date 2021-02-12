function combineParts(parts) {
    // Write your code here
    // min possible time done by combining 2 smallest values each time
    
    // let sorted = parts.sort((a,b) => a - b);
    
    // let totals = [];
    // let total = 0;
    
    // for (let i = 0; i < parts.length - 1; i++) {
    //     let currentTotal = 0;
    //     if (i === 0) {
    //         currentTotal = parts[i] + parts[i + 1];
    //         total = currentTotal;
    //     } else {
    //         total = total + parts[i + 1];
    //     }
    //     totals.push(total);
    // }
    
    // let sum = 0;
    
    // for (let i = 0; i < totals.length; i++) {
    //     sum += totals[i];
    // }
    // return sum;
    
    let sorted = parts.sort((a,b) => a - b);
    // console.log(sorted)
    let totals = [];
    
    for (let i = 0; i < parts.length; i++) {
        let currentTotal = 0;
        if (i === 0) {
            currentTotal = sorted[i] + sorted[i + 1];
            totals.push(currentTotal);
        }
        sorted = totals.concat(sorted.splice(i + 2));
        console.log(sorted);
    }
}

let parts = [20,4,8,2];
console.log(combineParts(parts))