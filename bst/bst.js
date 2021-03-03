class BST {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }
    check(root) {
        if (root === null) return 0;
        if (root.left === null && root.right === null) {
            return 1;
        } else {
            return this.check(root.right) + this.check(root.left);
        }
        // if (!root) return 0;
        // if (!root.left && !root.right) {
        //     return 1;
        // } else {
        //     return this.check(root.right) + this.check(root.left);
        // }
    }

    printNodes(root) {
        if (root !== null) {
            this.printNodes(root.left);
            if (root.left === null && root.right === null) {
                console.log(root.value);
            }
            this.printNodes(root.right);
        }
        return count;
    }
}

let test = new BST(100);
test.insert(200);
test.insert(300);
test.insert(150);
test.insert(100);
test.insert(20);
test.insert(30);
test.insert(10);
test.insert(5);
// console.log(test.check(test));
// test.printNodes(test);
console.log(test);

