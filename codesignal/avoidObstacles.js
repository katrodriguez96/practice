function solution(inputArray) {
    // sort array numerically
    inputArray.sort((a, b) => a - b);
    // find max value
    let max = inputArray[inputArray.length - 1];
    // check for every possible length
    for (let i = 1; i <= max; i++) {
        let j;
        for (j = i; j <= max; j = j + i) {
            // if there is obstacle, break loop
            if (inputArray.includes(j)) {
                break;
            }
        }
        // if the above loop didn't break
        if (j > max) {
            return i;
        }
    }

    return max + 1;
}

console.log(solution([5, 3, 6, 7, 9]));