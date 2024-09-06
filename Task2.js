function isPrime(num) {
    
    if (num > 1000) {
        return "Данные неверны";
    }

    
    if (num <= 1) {
        return "Не простое число";
    }

    
    for (let i = 2; i * i <= num; i = i + 1) {
        if (num % i === 0) {
            return "Не простое число";
        }
    }

    return "Простое число";
}