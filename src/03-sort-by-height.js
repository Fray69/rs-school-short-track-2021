/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexs = [];
  if (arr.includes(-1)) {
    arr.forEach((item, index) => {
      if (item === -1) indexs.push(index);
    });
    arr.forEach((item, index) => {
      if (item === -1) {
        arr.splice(index, 1); // Удаляет 1 элемент по index
      }
    });
    arr.forEach((item, index) => {
      if (item === -1) {
        arr.splice(index, 1); // Удаляет 1 элемент по index
      }
    });
    arr.forEach((item, index) => {
      if (item === -1) {
        arr.splice(index, 1);// Удаляет 1 элемент по index
      }
    });
    arr.sort((a, b) => a - b);
    indexs.forEach((item) => {
      arr.splice(item, 0, -1); // Удаляет 0 элементов по индексу item и вставляет "-1"
    });
  } else {
    arr.sort((a, b) => a - b);
  }
  return arr;
}

module.exports = sortByHeight;
