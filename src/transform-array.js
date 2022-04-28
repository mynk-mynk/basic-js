const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let transformedArr = [];
  const commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {

      case '--discard-next':
        i++;
        break;

      case '--discard-prev':
        if (transformedArr[transformedArr.length - 1] === arr[i - 1]) {
          transformedArr.pop();
        }
        break;

      case '--double-next':
        if (arr[i + 1] && !commands.includes(arr[i + 1])) {
          transformedArr.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (arr[i - 1] && arr[i - 2] !== '--discard-next') {
          transformedArr.push(arr[i - 1]);
        }
        break;

      default:
        transformedArr.push(arr[i]);
    }
  }

  return transformedArr;
}

// Failing test case
// transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])
// Expected: [1,2,3,4,5]
// Actual: [1,2,4,5]

module.exports = {
  transform
};
