function solution(s) {
    let x = 1;
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            x++;
        } else {
            if (x === 1) {
                result += s[i];
            } else {
                result += x + s[i];
                x = 1;
            }
        }
    }
    return result;
}
