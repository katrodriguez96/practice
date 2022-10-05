function solution(n) {
    let max = 0;
    n = String(n);
    for (let i = 0; i < n.length; i++) {
        let int = Number(n.slice(0, i) + n.slice(i+1));
        if (int > max) {
            max = int;
        }
    }
    return max;
}

console.log(solution(152));