// write a function that accepts a string and checks whether each character in the string is upperCase or lowerCase and returns
// "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter

let input = "bJI*ENsd4fRAIR5VIrsRFA-ijgRar";

function eachChar (string) {
    let stringArray = string.split("");
    for (let i = 0; i < stringArray.length; i++){
        let char = stringArray[i];
        if (char.toUpperCase() !== char.toLowerCase()){
            if (char === char.toUpperCase()){
                console.log(char + " is uppercase.");
            } else if (char === char.toLowerCase()){
                console.log(char + " is lowercase.");
            }
        } else {
            console.log(char + " is not a character.");
        }
    }
}

console.log(eachChar(input));