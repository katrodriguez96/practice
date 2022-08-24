function solution(n) {
    let numArr = Array.from(String(n), num => Number(num));
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

console.log(solution(248622));
