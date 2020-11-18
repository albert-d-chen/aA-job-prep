function foo() {
    function bar() {
        setTimeout(
            () => console.log('curly'), 1000
        )
    }
    console.log('larry');
    return bar;
}

let x= foo();
x();
console.log('Moe');