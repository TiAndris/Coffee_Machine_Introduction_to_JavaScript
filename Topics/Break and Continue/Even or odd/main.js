function checkEvenOrOdd(numbers) {
    // write your code here
    for (let i in numbers){
        if (numbers[i] === 0){
            break;
        }
        if (numbers[i] % 2 === 0){
            console.log("even");

        } else {
            console.log("odd");
        }
    }
}