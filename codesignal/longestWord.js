function solution(text) {
    text = text.replaceAll(/[^a-zA-Z]+/g, " ");
    let textArr = text.split(" ");
    let longest = '';
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].length > longest.length) {
            longest = textArr[i];
        }
    }
    return longest;
}

console.log(solution("ab-CDE-fg_hi"));