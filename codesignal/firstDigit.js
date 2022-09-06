function solution(inputString) {
    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < inputString.length; i++) {
        if (nums.includes(inputString[i])) {
            return inputString[i];
        }
    }
}