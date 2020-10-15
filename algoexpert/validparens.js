function balancedBrackets(string) {
  // Write your code here.
  let hash = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let arr = [];
  let brackets = "}])";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "[" || string[i] === "{") {
      arr.push(string[i]);
    //   console.log(arr);
    } else {
        console.log(brackets.includes(string[i]))
        if (brackets.includes(string[i])){
            let closing = arr.pop();
            if (string[i] !== hash[closing]) {
            return false;
      }
    }
    }
// console.log(arr)
}
  if (arr.length !== 0) {
    return false;
  }

  return true;
}


console.log(balancedBrackets('(a)'))