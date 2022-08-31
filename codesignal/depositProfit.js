function solution(deposit, rate, threshold) {
    let count = 0;
    let account = deposit;
    while (account < threshold) {
        let growth = account * (rate / 100);
        account += growth;
        count++;
    }
    return count;
}

console.log(solution(100, 20, 170)); // 3
