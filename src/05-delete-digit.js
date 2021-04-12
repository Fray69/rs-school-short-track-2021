/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = [];
  let poisk = n.toString().split('');
  let result = 0;
  for (let i = 0; i <= poisk.length; i++) {
    poisk = n.toString().split('');
    poisk.splice(i, 1); // Удаляет 1 элемент по индексу i
    array.push(Number(poisk.join('')));
  }
  array.sort((a, b) => a - b);
  result = array[poisk.length];
  return result;
}

module.exports = deleteDigit;
