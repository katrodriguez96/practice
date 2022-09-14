function solution(n) {
    let count = 0;
    let num = n.toString();
    while(num.length !== 1) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        count++;
        num = sum.toString();
    }
    return count;
}

console.log(solution(91));