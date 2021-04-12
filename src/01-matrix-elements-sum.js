/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let check = false;
  let result = 0;
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        check = true;
        for (let k = 0; k < i; k++) {
          result += matrix[k][j];
        }
      }
    }
  }
  if (!check) {
    return matrix.flat().reduce((total, item) => total + item);
  }
  return result;
}

module.exports = getMatrixElementsSum;
