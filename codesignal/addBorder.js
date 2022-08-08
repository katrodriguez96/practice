function solution(picture) {
    let width = picture[0].length + 2;
    let border = new Array(width + 1).join("*");
    for (let i = 0; i < picture.length; i++) {
        picture[i] = "*" + picture[i] + "*";
    }
    picture.unshift(border);
    picture.push(border);
    return picture
}

console.log(solution(["abc", "ded"]));