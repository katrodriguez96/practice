function solution(inputString) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphaArr = alphabet.split("");
    let strArr = inputString.split("");
    for (let i = 0; i < strArr.length; i++) {
        let newCharIndex = null;
        if (alphaArr.indexOf(strArr[i]) === alphaArr.length - 1) { // if z, turn to a
            newCharIndex = 0;
        } else {
            newCharIndex = alphaArr.indexOf(strArr[i]) + 1;
        }
        strArr[i] = alphaArr[newCharIndex];
    }
    return strArr.join("");
}

console.log(solution("crazy"));