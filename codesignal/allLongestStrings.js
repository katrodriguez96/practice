function solution(inputArray) {
    let longestString = "";
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestString.length) {
            longestString = inputArray[i]
        }
    }
    let newArr = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longestString.length) {
            newArr.push(inputArray[i]);
        }
    }
    return newArr;
}
