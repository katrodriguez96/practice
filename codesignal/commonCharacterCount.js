function solution(s1, s2) {
    let count = 0;
    s1 = s1.split("");
    s2 = s2.split("");
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            count++;
            s2.splice(s2.indexOf(s1[i]), 1);
        }
    }
    return count;
}
