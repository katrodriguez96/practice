function solution(matrix) {
    let squares = [];
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            let arr = [matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]];
            squares.push(arr);
        }
    }
    squares = Array.from(new Set(squares.map(JSON.stringify)), JSON.parse);
    return squares.length;
}

let matrix = [[1, 2, 1],
              [2, 2, 2],
              [2, 2, 2],
              [1, 2, 3],
              [2, 2, 1]];

console.log(solution(matrix));