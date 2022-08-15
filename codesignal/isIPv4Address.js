function solution(inputString) {
    let IPArr = inputString.split(".");
    if (IPArr.length !== 4) {
        return false;
    }
    for (let i = 0; i < IPArr.length; i++) {
        if (isNaN(parseInt(IPArr[i]))) {
            return false;
        } else if (Number(IPArr[i]).toString() !== IPArr[i]) {
            return false;
        } else if (parseInt(IPArr[i]) < 0 || parseInt(IPArr[i]) > 255) {
            return false;
        }
    }
    return true;
}

console.log(solution("172.16.254.1"));
console.log(solution(".254.255.0"));
