function solution(sequence) {
    let result = false;
    for (let i = 0; i < sequence.length; i++) {
        if (result === true) {
            break;
        }
        let testArr = sequence.slice();
        testArr.splice(i, 1);
        if (testArr.length === 1) {
            result = true;
        }
        for (let j = 0; j < testArr.length - 1; j++) {
            if (testArr[j] < testArr[j + 1]) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
    }
    return result;
}

console.log(solution([1, 1]));
