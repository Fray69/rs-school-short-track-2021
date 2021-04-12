/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const array = s2.split('');
  for (let i = 0; i < s1.length; i++) {
    if (array.includes(s1[i])) {
      result++;
      array.splice(array.indexOf(s1[i]), 1); // удалить 1 элемент по индексу
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
