function solution(matrix) {
    let total = 0;
    let badIndex = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!badIndex.includes(j)) {
                if (matrix[i][j] !== 0) {
                    total += matrix[i][j];
                } else {
                    if (!badIndex.includes(j)) {
                        badIndex.push(j);
                    }
                }
            }
        }
    }
    return total;
}
