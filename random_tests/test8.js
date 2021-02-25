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
    // console.log(str);
    if (str.length === string.length) {
        return str;
    } else {
        return remove(str);
    }
}

let string = 'ABBCCCBBCA'
console.log(remove(string));