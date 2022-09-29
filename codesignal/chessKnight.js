function solution(cell) {
    cell = cell.split('');
    cell[0] = cell[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    cell[1] = Number(cell[1]);
    let aux = [[1, 1], [1, 1], [1, 1], [1, 1]];
    let moves = 8;

    if (cell[0] < 3) {
        moves -= aux[0][0];
        moves -= aux[0][1];
        aux[0][0] = 0;
        aux[0][1] = 0;
    }
    if (cell[0] < 2) {
        moves -= aux[1][0];
        moves -= aux[1][1];
        aux[1][0] = 0;
        aux[1][1] = 0;
    }
    if (cell[0] > 6) {
        moves -= aux[3][0];
        moves -= aux[3][1];
        aux[3][0] = 0;
        aux[3][1] = 0;
    }
    if (cell[0] > 7) {
        moves -= aux[2][0];
        moves -= aux[2][1];
        aux[2][0] = 0;
        aux[2][1] = 0;
    }

    if (cell[1] < 3) {
        moves -= aux[1][1];
        moves -= aux[2][1];
        aux[1][1] = 0;
        aux[2][1] = 0;
    }
    if (cell[1] < 2) {
        moves -= aux[0][1];
        moves -= aux[3][1];
        aux[0][1] = 0;
        aux[3][1] = 0;
    }
    if (cell[1] > 6) {
        moves -= aux[1][0];
        moves -= aux[2][0];
        aux[1][0] = 0;
        aux[2][0] = 0;
    }
    if (cell[1] > 7) {
        moves -= aux[0][0];
        moves -= aux[3][0];
        aux[0][0] = 0;
        aux[3][0] = 0;
    }

    return moves;
}

console.log(solution("a1")); // 2
console.log(solution("c2")); // 6
