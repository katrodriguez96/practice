function solution(inputArray, k) {
    for (let i = k - 1; i < inputArray.length; i+= k - 1) {
        inputArray.splice(i, 1);
    }
    return inputArray
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
