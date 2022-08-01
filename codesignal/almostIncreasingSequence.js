// function solution(sequence) {
//     let result = false;
//     for (let i = 0; i < sequence.length; i++) {
//         if (result === true) {
//             break;
//         }
//         let testArr = sequence.slice();
//         testArr.splice(i, 1);
//         if (testArr.length === 1) {
//             result = true;
//         }
//         for (let j = 0; j < testArr.length - 1; j++) {
//             if (testArr[j] < testArr[j + 1]) {
//                 result = true;
//             } else {
//                 result = false;
//                 break;
//             }
//         }
//     }
//     return result;
// }

function solution(sequence) {
    let bad = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            bad++;
            if (bad > 1) {
                return false;
            }
            if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
                return false;
            }
        }
    }
    return true;
}