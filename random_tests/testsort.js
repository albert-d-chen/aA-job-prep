function test(array) {
    array.sort((a,b) => a - b);
    return array;
}

let array = ['8:00AM', '8:20PM', '9:00AM', '6:00AM', '6:00PM']
// console.log(test(array));

const racer = function () {
    setImmediate(() => console.log('immd'));
    setTimeout(() => console.log('time'), 0);
    process.nextTick(() => console.log('tick'));
    console.log('current')
}

const racer1 = function () {
    setTimeout(() => console.log('time'), 0);
    setImmediate(() => console.log('immd'));
    process.nextTick(() => console.log('tick'));
}
const racer2 = function () {
    process.nextTick(() => console.log('tick'));
    setTimeout(() => console.log('time'), 0);
    setImmediate(() => console.log('immd'));
}
const racer3 = function () {
    setImmediate(() => console.log('immd'));
    process.nextTick(() => console.log('tick'));
    setTimeout(() => console.log('time'), 0);
}

racer1();
racer2();
racer3();