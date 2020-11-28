function min(cost) {
    for(let i = 1; i < cost.length; i++ ){
        cost[i][0] += Math.min(cost[i-1][1], cost[i-1][2]);
        cost[i][1] += Math.min(cost[i-1][0], cost[i-1][2]);
        cost[i][2] += Math.min(cost[i-1][0], cost[i-1][1]);
    }

    let n = cost.length;
    return Math.min(cost[n-1][0], Math.min(cost[n-1][1],cost[n-1][2]) );
}

let cost = [[1,2,3],[3,2,1],[2,1,3]]
console.log(min(cost))