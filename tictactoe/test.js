Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

let array = [1,2,3,4];
[1,2,3,4].myEach(function (ele){console.log(ele + 1)})