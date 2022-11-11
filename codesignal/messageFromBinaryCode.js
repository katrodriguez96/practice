function solution(code) {
    let message = [];
    for (let i = 0; i < code.length; i+=8) {
        let char = code.slice(i, i+8);
        message.push(String.fromCharCode(parseInt(char, 2)));
    }
    return message.join('');
}

console.log(solution("010010000110010101101100011011000110111100100001")); // "Hello!"