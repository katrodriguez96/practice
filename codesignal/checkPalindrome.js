function solution(inputString) {
    var splitString = inputString.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    if (inputString == joinArray) {
        return true;
    } else {
        return false;
    }
}
