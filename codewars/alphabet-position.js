// TODO: Replace every letter in a string with its position in the alphabet.
//  If anything in the text isn't a letter, ignore it and don't return it.

function myAlphabetPosition(text) {
    let arr = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        if (alphabet.indexOf(char) !== -1) {
            arr.push(alphabet.indexOf(char) + 1)
        }
    }
    return arr.join(" ");
}

console.log(myAlphabetPosition("Hello World!!!!!!11111!!!"));

// Best practice:
function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map( (c) => c.charCodeAt() - 64)
        .join(' ');
}