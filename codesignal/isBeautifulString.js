// function solution(inputString) {
//     let sortedArr = inputString.split('').sort(); // string to array, alphabetized
//     let chars = [];
//     let counts = [];
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (chars.includes(sortedArr[i])) {
//             if (counts[chars.indexOf(sortedArr[i])]) {
//                 counts[chars.indexOf(sortedArr[i])] += 1;
//             } else {
//                 counts[chars.indexOf(sortedArr[i])] = 1;
//             }
//         } else {
//             chars.push(sortedArr[i]);
//         }
//     }
//     for (let i = 1; i < counts.length; i++) {
//         if (counts[i] > counts[i-1]) {
//             return false;
//         }
//     }
//     return true;
// }

function solution(inputString) {
    const alphabet = [];

    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        alphabet.push(String.fromCharCode(i));
    }

    const letters = Array(alphabet.length).fill(0);

    for (let letter of inputString) {
        letters[alphabet.indexOf(letter)]++;
    }

    for (let i = 0; i < letters.length; i++) {
        if (letters[i+1] > letters[i]) {
            return false;
        }
    }

    return true;
}

console.log(solution("bbbaacdafe"));
console.log(solution("aabbb"));
console.log(solution("bbc"));
