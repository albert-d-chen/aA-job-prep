function discountsObject(discounts) {
    let discountsObj = {}
    for (let i = 0; i < discounts.length; i++) {
        discountsObj[discounts[i][0]] = [discounts[i][1], discounts[i][2]];
    }

    return discountsObj;
}


function findLowestPrice(products, discounts) {
    // Write your code here
    let discountsObj = discountsObject(discounts);
    let price = 0;

    for (let i = 0; i < products.length; i++) {
        price = parseInt(products[i][0]);
        console.log(discountsObj.products[0][1])
        //     if (Object.keys(discountsObj).includes(products[i][1])) {
        //         if (discountsObj.products[1][0] === '0') {
        //             price = discountsObj.products[1][1];
        //         } else if (discountsObj.products[1][0] === '1') {
        //             price = price - discountsObj.products[1][1] * 0.01 * price;
        //         } else if (discountsObj.products[1][0] === '2') {
        //             price = price - discountsObj.products[1][1];
        //         }

        // }
    }
    return price;
}


let discounts = [['sale', '0', '10'], ['jan', '1', '10']]
let products = [['10', 'sale', 'january-sale']]
console.log(findLowestPrice(products, discounts))