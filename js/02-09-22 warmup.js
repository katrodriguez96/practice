//TODO: write a function that takes a string as argument and returns the number of vowels contained in that string.

function countVowels (string) {
    let chars = string.split("");
    return chars.reduce((vowelCounts, char) => {
        let {a = 0, e = 0, i = 0, o = 0, u = 0} = vowelCounts;
        if (char === "a") {
            return {...vowelCounts, a: a + 1};
        }
        if (char === "e") {
            return {...vowelCounts, e: e + 1};
        }
        if (char === "i") {
            return {...vowelCounts, i: i + 1};
        }
        if (char === "o") {
            return {...vowelCounts, o: o + 1};
        }
        if (char === "u") {
            return {...vowelCounts, u: u + 1};
        }
        return vowelCounts;
    }, {})
}
// counts each character. need to only catch vowels
console.log(countVowels("Mary had a little lamb"));