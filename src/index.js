module.exports = function solveSudoku(matrix) {
  main(matrix)
  return matrix
}

function main(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        const row = getRow(matrix, i)
        const column = getColumn(matrix, j)
        const segment = getSegment(matrix, i, j)
        for (let k = 1; k < 10; k++) {
          if (test(segment, row, column, k)) {
            matrix[i][j] = k
            if (main(matrix)) return true
            matrix[i][j] = 0
          }
        }
        return false
      }
    }
  }
  return true
}

function getRow(matrix, idx) {
  const row = []

  for (let i = 0; i < 9; i++) {
    row.push(matrix[idx][i])
  }
  return row
}

function getColumn(matrix, idx) {
  const column = []

  for (let i = 0; i < 9; i++) {
    column.push(matrix[i][idx])
  }
  return column
}

function getSegment(matrix, dx, dy) {
  const segment = []

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      segment.push(matrix[Math.floor(dx / 3) * 3 + i][Math.floor(dy / 3) * 3 + j])
    }
  }
  return segment
}

function test(segment, row, column, k) {
  for (let i = 0; i < 9; i++) {
    if (k === segment[i] || k === row[i] || k === column[i]) {
      return false
    }
  }
  return true
}