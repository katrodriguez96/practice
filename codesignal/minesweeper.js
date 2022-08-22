function solution(matrix) {
    let board = [];
    for (let i = 0; i < matrix.length; i++) {
        board.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            board[i][j] = 0;
            // above
            if (matrix[i-1] !== undefined) {
                if (matrix[i-1][j] === true) {
                    board[i][j]++;
                }
            }
            // below
            if (matrix[i+1] !== undefined) {
                if (matrix[i+1][j] === true) {
                    board[i][j]++;
                }
            }
            // left
            if (matrix[i][j-1] === true) {
                board[i][j]++;
            }
            // right
            if (matrix[i][j+1] !== undefined) {
                if (matrix[i][j+1] === true) {
                    board[i][j]++;
                }
            }
            // down right
            if (matrix[i+1] !== undefined) {
                if (matrix[i+1][j+1] === true) {
                    board[i][j]++;
                }
            }
            // down left
            if (matrix[i+1] !== undefined) {
                if (matrix[i+1][j-1] === true) {
                    board[i][j]++;
                }
            }
            // top right
            if (matrix[i-1] !== undefined) {
                if (matrix[i-1][j+1] === true) {
                    board[i][j]++;
                }
            }
            // top left
            if (matrix[i-1] !== undefined) {
                if (matrix[i-1][j-1] === true) {
                    board[i][j]++;
                }
            }
        }
    }
    return board;
}
