function analyzeArrayElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i = i + 1) {
    if (typeof arr[i] === 'number') {
        if (!isNaN(arr[i])) {
            if (arr[i] === 0) {
                zeroCount = zeroCount + 1;
            } else if (arr[i] % 2 === 0) {
                evenCount = evenCount + 1;
            } else {
                oddCount = oddCount + 1;
            }
        }
    }
}

    console.log(evenCount);
    console.log(oddCount);
    console.log(zeroCount);
}


const array = [1, 2, 3, 4, 5, 6, 0, null, 'a', 7, 8, 9, 10];
analyzeArrayElements(array);