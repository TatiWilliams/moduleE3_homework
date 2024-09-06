function createSumFunction(num1) {
    return function(num2) {
        return num1 + num2;
    };
}


const sum = createSumFunction(5);
console.log(sum(10)); 