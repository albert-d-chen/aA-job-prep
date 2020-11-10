function numberOfCharactersEscaped(expression) {
    let bounds = false;
    let hashCount = 0;
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let escaped = 0;

    for (let i = 0; i < expression.length; i++) {
        let ele = expression[i];
        let idx;
        if (ele === '#' && hashCount === 0) {
            idx = i;
            hashCount = 1;

            for (let j = i + 1; j < expression.length; j++) {
                if (expression[j] === '#' && hashCount === 1) {
                    bounds = true;
                    break;
                } 
            }
            
        } else if (ele === '#' && hashCount === 1) {
            hashCount = 0;
            bounds = false;
        }

        if (bounds === true && ele === '!' && alpha.includes(expression[i + 1]) && hashCount === 1) { 
            escaped += 1;
        }
    }

    return escaped;
}


let expression = '#a!bc##!c'
console.log(numberOfCharactersEscaped(expression));