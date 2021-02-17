function counter() {
    let i = 0;
    console.log('start');
    while (i < 5) {
        setTimeout(() => {
            console.log(i);
        }, 0)
        i++;
    }
    console.log('end');
}

counter();