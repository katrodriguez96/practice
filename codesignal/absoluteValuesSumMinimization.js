function solution(a) {
    let absArr = [];
    for (let i = 0; i < a.length; i++) {
        let x = a[i];
        let abs = null;
        for (let j = 0; j < a.length; j++) {
            abs += Math.abs(a[j] - x);
        }
        if (absArr.length === 0) {
            absArr.push(abs);
            absArr.push(x);
        } else if (abs < absArr[0]) {
            absArr[0] = abs;
            absArr[1] = x;
        }
    }
    return absArr[1];
}

console.log(solution([2, 4, 7])); // 4