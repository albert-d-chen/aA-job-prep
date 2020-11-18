function test(array) {
    array.sort((a,b) => a - b);
    return array;
}

let array = ['8:00AM', '8:20PM', '9:00AM', '6:00AM', '6:00PM']
console.log(test(array));