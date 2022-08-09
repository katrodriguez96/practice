function solution(inputString) {
    if (inputString.length === 1) {
        return true;
    }
    if (inputString.length % 2 === 0) {
        // if length is even, all characters have to appear an even number of times
        let chars = [];
        for (let i = 0; i < inputString.length; i++) {
            if (!chars.includes(inputString[i])) {
                chars.push(inputString[i]);
            }
        }
        let arr = inputString.split("");
        for (let i = 0; i < chars.length; i++) {
            let count = 0;
            for (let j = 0; j < arr.length; j++) {
                if (chars[i] === arr[j]) {
                    count += 1;
                }
            }
            if (count % 2 !== 0) {
                return false;
            }
        }
        return true;
    } else {
        // if length is odd, all characters have to appear an even number of times except one
        let chars = [];
        for (let i = 0; i < inputString.length; i++) {
            if (!chars.includes(inputString[i])) {
                chars.push(inputString[i]);
            }
        }
        let arr = inputString.split("");
        let oddChars = [];
        for (let i = 0; i < chars.length; i++) {
            let count = 0;
            for (let j = 0; j < arr.length; j++) {
                if (chars[i] === arr[j]) {
                    count += 1;
                }
            }
            if (count % 2 !== 0) {
                oddChars.push(chars[i]);
            }
        }
        return oddChars.length === 1;
    }
}

console.log(solution("abca"));
