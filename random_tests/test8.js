function remove(string) {
    let str = '';
    let i = 0;

    while (i < string.length) {
        let tracker = 1;
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                tracker += 1;
            } else {
                break;
            }
        }
        if (tracker > 2) {
            
            i += tracker;
        } else {
            str += string[i];
            
            i++;
        }
        tracker = 1;
    }

    if (str.length === string.length) {
        return str;
    } else {
        return remove(str);
    }
}

let string = 'ABBCCCBBCA'
console.log(remove(string));


function stringCompress(string) {
    const stack = [];
    const queue = string.split("");
    while (queue.length > 0) {
        if (stack.length === 0)  stack.push(queue.shift())
        if (stack[stack.length - 1] !== queue[0] ) {
            popStack(stack, queue)
        } else if (stack[stack.length - 1] === queue[0]) {
            stack.push(queue.shift())
        }
    }
    if ( queue.length === 0 ) popStack(stack, queue)
    return stack.join("")
}
function popStack(stack, queue) {
    let lastEle = stack[stack.length - 1];
    let secondToLast = stack[stack.length - 2];
    let thirdToLast = stack[stack.length - 3];
    if (lastEle === secondToLast && lastEle === thirdToLast ) {
        let currentEle = lastEle
        while (currentEle === stack[stack.length - 1]) stack.pop();
    } else {
        stack.push(queue.shift())
    }
}