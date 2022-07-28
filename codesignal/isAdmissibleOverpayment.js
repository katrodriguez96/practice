function solution(prices, notes, x) {
    let priceSensitivity = 0;
    for (let i = 0; i < notes.length; i++) {
        let strArr = notes[i].split(" ");
        if (strArr[0] === "Same") {
            continue;
        }
        let percentage = parseFloat(strArr[0].slice(0, -1)) * .01;
        if (strArr[1] === "higher") {
            let ogPrice = prices[i] / (percentage + 1);
            let difference = ogPrice * percentage;
            priceSensitivity += difference;
        } else {
            let ogPrice = prices[i] / (1 - percentage);
            let difference = ogPrice * percentage;
            priceSensitivity -= difference;
        }
        console.log("priceSensitivity after loop = " + priceSensitivity);
    }
    return x >= priceSensitivity;
}

let prices = [110, 95, 70];
let notes = ["10.0% higher than in-store", "5.0% lower than in-store", "Same as in-store"];
let x = 5;

console.log("should return true = " + solution(prices, notes, x));
console.log(solution())