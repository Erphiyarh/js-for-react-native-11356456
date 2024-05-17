function processarray(numbers) {
    return numbers.map
    (number => {
        if (number % 2 === 0) {
            return number * 2;
        } else {
            return number * 3;
            
        }
    })
    
}

console.log(processarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));