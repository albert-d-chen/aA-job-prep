function counter() {
    let i = 0;
    console.log('start');
    // while (i < 5) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, 0)
    //     i ++;
    // }

    for (let i = 0; i < 5; i++) {
        // setTimeout(() => {
        //     console.log(i);
        // }, 0)
        console.log(i);
    }
        // setTimeout(() => {
        //     setTimeout(() => {
        //         console.log('1');
        //     },0);
        //     console.log('2');
        //     console.log('3');
        // }, 0)
        // setTimeout(() => {
        //     console.log('2');
        // }, 2000)
        // setTimeout(() => {
        //     console.log('3');
        // }, 1000)

    console.log('end');
}

counter();
console.log('end2')