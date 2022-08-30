function solution(n, firstNumber) {
    if (firstNumber > (n / 2)) {
        return firstNumber - (n / 2);
    } else if (firstNumber <= (n / 2)) {
        if (firstNumber === (n / 2)) {
            return 0;
        }
        return firstNumber + (n / 2);
    }
}

console.log(solution(10, 2)); // 7
console.log(solution(6, 3)); // 0