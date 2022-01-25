// TODO: Write a function that returns an object displaying any number/letter that appears consecutively in a string of numbers. The object should display how many times that letter/number appears consecutively
// INPUT: “42992338111134”
// EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}
// ---
// INPUT: “BQAAIPPPPFFA”
// EXPECTED OUTPUT: {a: 2, p: 4, F: 2}

// function consecutive (string) {
//     for (let i = 0; i < string.length; i++) {
//         let count = 1;
//         while (i + 1 < string.length && string.charAt(i) === string.charAt(i + 1)) {
//             i++;
//             count++;
//         }
//         document.write(string.charAt(i) + "" + count + " ");
//     }
//     document.write("<br>");
// }

// idk