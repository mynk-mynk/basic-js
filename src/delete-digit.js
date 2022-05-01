const { NotImplementedError } = require('../extensions/index.js');

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
  let digits = n.toString().split('');
  let num = digits.find((el, i, arr) => +arr[i] < +arr[i + 1]);

  if (!!num) {
    let ind = digits.indexOf(num);
    digits.splice(ind, 1);

  } else {
    digits.pop();
  }

  return parseInt(digits.join(''));
}

module.exports = {
  deleteDigit
};
