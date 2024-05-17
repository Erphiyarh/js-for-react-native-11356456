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

function formatarraystring(strings, numbers) {
    return strings.map
    ((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
            
        }
    })
    
}
