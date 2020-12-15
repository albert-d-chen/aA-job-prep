function test(array) {
    array.sort((a,b) => a - b);
    return array;
}

let array = ['8:00AM', '8:20PM', '9:00AM', '6:00AM', '6:00PM']
console.log(test(array));

const racer = function () {
    setImmediate(() => console.log('immd'));
    setTimeout(() => console.log('time'), 0);
    process.nextTick(() => console.log('tick'));
}

console.log(racer());