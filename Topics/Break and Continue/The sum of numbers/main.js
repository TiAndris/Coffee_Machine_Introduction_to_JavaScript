function sum(numbers) {
    // write your code here
    let result = 0;
    for (let i in numbers){
        if (numbers[i] === 0){
            return result;
        } else {
            result += numbers[i];
        }
    }
    return result;
}