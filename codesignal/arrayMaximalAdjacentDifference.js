function solution(inputArray) {
    let absoluteDifference = null;
    for (let i = 0; i < inputArray.length - 1; i++) {
        let difference = null;
        if (inputArray[i] >= inputArray[i + 1]) {
            difference = inputArray[i] - inputArray[i + 1];
        } else {
            difference = inputArray[i + 1] - inputArray[i];
        }
        if (absoluteDifference === null || difference > absoluteDifference) {
            absoluteDifference = difference;
        }
    }
    return absoluteDifference;
}
