function solution(inputArray) {
    let count = 0;
    let increasing = false;
    while (!increasing) {
        let check = true;
        for (let i = 0; i < inputArray.length - 1; i++) {
            if (inputArray[i] >= inputArray[i + 1]) {
                check = false;
                inputArray[i + 1] += 1;
                count += 1;
            }
        }
        increasing = check;
    }
    return count;
}

console.log(solution([-1000, 0, -2, 0])); // should return 5