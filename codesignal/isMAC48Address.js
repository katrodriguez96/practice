function solution(inputString) {
    let arr = inputString.split('-');
    return arr.length === 6 && arr.every((a) => /^[A-F\d]{2}$/.test(a));
}

console.log(solution("00-1B-63-84-45-E6"))
