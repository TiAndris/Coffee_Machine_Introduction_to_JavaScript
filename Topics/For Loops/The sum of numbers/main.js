function sum(a, b) {
    let total = 0;
    for (let i = a; i <= b; i++) {
        total += i;
    }
    console.log(total);
    return total;
}

sum(1, 100);