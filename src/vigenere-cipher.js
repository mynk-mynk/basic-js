const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(arg) {

    if (arg === false) {
      this.style = -1;

    } else {
      this.style = 1;
    }
  }

  encrypt(str, key) {

    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    str = str.toLowerCase();
    key = key.toLowerCase();
    let result = '';
    let j = 0;
    
    for (let i = 0; i < str.length; i++) {
      
      if (str[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
        result += str[i];
        continue;
      }

      let charCode = str[i].charCodeAt() + key[j % key.length].charCodeAt() - 97;

      if (charCode < 123) {
        result += String.fromCharCode(charCode);
        j++;

      } else {
        result += String.fromCharCode(charCode % 123 + 97);
        j++;
      }
    }

    return this.style === 1 ? result.toUpperCase() : result.split('').reverse().join('').toUpperCase();
  }


  decrypt(code, key) {

    if (!code || !key) {
      throw new Error('Incorrect arguments!');
    }

    code = code.toLowerCase();
    key = key.toLowerCase();
    let result = '';
    let j = 0;

    for (let i = 0; i < code.length; i++) {

      if (code[i].charCodeAt() < 97 || code[i].charCodeAt() > 122) {
        result += code[i];
        continue;
      }

      let charCode = code[i].charCodeAt() + 26 - key[j % key.length].charCodeAt() + 97;

      if (charCode < 123) {
        result += String.fromCharCode(charCode);
        j++;

      } else {
        result += String.fromCharCode(charCode % 123 + 97);
        j++;
      }
    }

    return this.style === 1 ? result.toUpperCase() : result.split('').reverse().join('').toUpperCase();
  }
}


module.exports = {
  VigenereCipheringMachine
};
