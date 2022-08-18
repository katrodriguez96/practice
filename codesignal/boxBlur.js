function solution(image) {
    // need to find how many 3x3 squares are in an image
    // probably something to do with the length of the arrays
    // image.length and image[i].length

    // need to find how to do find the average for each square... depending on where they are? how?
    // should i just cheat and look it up? i know how to do

    // one 3 x 3 square
    // add up all values
    let blurred = [];
    let total = 0;
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            total += image[i][j];
        }
    }
    // find average value rounded down
    blurred.push([Math.floor(total / 9)]);
    return blurred;
}

function boxBlur(image) {
    let imageArray = [];
    for (let i = 0; i < image.length - 2; i++) {
        let line = [];
        for (let j = 0; j < image[i].length - 2; j++) {
            let sum = 0;
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    sum += image[x][y];
                }
            }
            line.push(Math.floor(sum / 9));
        }
        imageArray.push(line);
    }
    return imageArray;
}

console.log(boxBlur([[36,0,18,9],
    [27,54,9,0],
    [81,63,72,45]]));
