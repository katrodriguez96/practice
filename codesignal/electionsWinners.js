function solution(votes, k) {
    let max = Math.max(...votes);
    let numOfMax = votes.filter(v => v === max).length;
    return votes.reduce((acc, v) => acc + (v === max && numOfMax === 1 || v + k > max ? 1 : 0), 0);
}

console.log(solution([5, 1, 3, 4, 1], 0)); // 1