function find5(numbers) {
    // change it
    for (let i in numbers) {
        if (numbers[i] === 5) {
            return i;
        }
    }
    return -1;
}