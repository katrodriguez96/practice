// TODO: write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34

function stringSum (string) {
    let strArr = string.split("");
    let numArr = [];
    for (let i = 0; i < strArr.length; i++){
        numArr.push(parseInt(strArr[i]));
    }
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    return (numArr.reduce(reducer));
}

console.log(stringSum("917485"));
