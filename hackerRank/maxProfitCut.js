function maxProfit(costPerCut, salePrice, lengths) {
    // Write your code here
    
    let shortestBar = Math.max(...lengths);
    let arr = new Array(shortestBar + 1).fill(0);
    
    //shortestLength iterator
    for (let i = 1; i < arr.length; i++) {
        let totalRods = 0;
        let saleLength = i;
        let totalCuts = 0;
        let extraCuts = 1;
        let revenue = 0;
        
        for (let j = 0; j < lengths.length; j++) {
            if (lengths[j] % i === 0) {
                totalRods = lengths[j] / i;
                //2
                totalCuts = Math.floor(lengths[j]/ i )- 1; 
                //1
                // console.log(totalRods, totalCuts)
                revenue = totalRods * saleLength * salePrice - totalCuts * costPerCut;
            } 
            else {
                let fixedRod = lengths[j];
                    while (fixedRod % i !== 0) {  
                        fixedRod -= 1;
                    }
                    // console.log(fixedRod);
                if (fixedRod % i === 0) {
                    totalRods = Math.floor(fixedRod / i);
                    totalCuts = Math.floor(fixedRod / i);
                    // console.log(totalRods, saleLength, salePrice, totalCuts, costPerCut);
                    revenue = totalRods * saleLength * salePrice - totalCuts * costPerCut;
                }
                
            }
            arr[i] = arr[i] + revenue;
        }  
    }
    console.log(arr);
    return Math.max(...arr);
}

let lengths = [26,103, 59];
let costPerCut = 1;
let salePrice = 10;
console.log(maxProfit(costPerCut, salePrice, lengths))


//[26,103,59]
//cost 1
//sale 10
//1770
//[26,103,59]
//cost 100
//sale 10
//1230
//[30,59,110]
//cost1
//sale10
//1913

