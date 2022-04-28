const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition;

  if (options.hasOwnProperty('addition')) {
    addition = new Array(options.additionRepeatTimes ? +options.additionRepeatTimes : 1)
                        .fill(options.addition === null ? 'null' : options.addition)
                        .join(options.additionSeparator ? `${options.additionSeparator}` : '|');
  }

  let result = new Array(options.repeatTimes ? +options.repeatTimes : 1)
                        .fill(str + (addition ? addition : ''))
                        .join(options.separator ? options.separator : '+');

  return result;
}

module.exports = {
  repeater
};
