function validate(matrix, row, col, val) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[row][i] === val || matrix[i][col] === val) return false;
  }
  const colSq = Math.floor(col / 3) * 3;
  const rowSq = Math.floor(row / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[rowSq + i][colSq + j] === val) return false;
    }
  }
  return true;
}

module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        for (let val = 1; val <= matrix.length; val++) {
          if (validate(matrix, row, col, val)) {
            matrix[row][col] = val;
            if (solveSudoku(matrix)) return matrix;
          }
        }
        matrix[row][col] = 0;
        return false;
      }
    }
  }
  return matrix;
}
