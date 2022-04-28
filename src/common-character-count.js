const { NotImplementedError } = require('../extensions/index.js');

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
  let obj1 = {};
  let obj2 = {};
  let count = 0;

  obj1 = countSymbols(s1, obj1);
  obj2 = countSymbols(s2, obj2);

  if (!obj1 || !obj2) return 0;

  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) count += Math.min(obj1[key], obj2[key]);
  }

  return count;
}

function countSymbols(str, obj) {

  for (let i = 0; i < str.length; i++) {
    obj.hasOwnProperty(str[i]) ? obj[str[i]] += 1 : obj[str[i]] = 1;
  }
  return obj;
}

module.exports = {
  getCommonCharacterCount
};
