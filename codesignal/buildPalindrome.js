function solution(st) {
    let i = 0;
    let arr;
    while (st !== st.split('').reverse().join('')) {
        arr = st.split('');
        arr.splice(st.length-i, 0, st[i]);
        st = arr.join('');
        i++;
    }
    return st;
}

console.log(solution("abcdc")); // "cdcba"