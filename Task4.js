function printNumbersBetween(start, end) {
    let current = start;

    const interval = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(interval); 
        }
        current = current + 1;
    }, 1000); 
}


printNumbersBetween(5, 15);