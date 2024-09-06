const power = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i = i + 1) {
        result *= x;
    }
    return result;
};


console.log(power(5, 3));
console.log(power(6, 2)); 