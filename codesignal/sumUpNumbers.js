function solution(inputString) {
    let num = '';
    let sum = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (parseInt(inputString[i]) || inputString[i] === '0') {
            num += inputString[i];
        } else if (num.length !== 0) {
            sum += parseInt(num);
            num = '';
        }
    }
    if (num.length !== 0) {
        sum += parseInt(num);
    }
    return sum;
}

console.log(solution    ("there are some (12) digits 5566 in this 770 string 239")); // 6587