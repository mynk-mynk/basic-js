const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  'value': [],

  getLength() {
    return this.value.length;
  },

  addLink(val) {
    arguments ? this.value.push(`( ${val} )`) : this.value.push('( )');
    return this;
  },

  removeLink(position) {

    if (!(Number.isInteger(position)) || position <= 0 || position > this.value.length) {
      this.value = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.value.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    
    for (let i = 0; i < Math.floor(this.value.length / 2); i++) {
      let temp;
      temp = this.value[i];
      this.value[i] = this.value[this.value.length - 1 - i];
      this.value[this.value.length - 1 - i] = temp;
    }

    return this;
  },

  finishChain() {
    let chain = this.value.join('~~');
    this.value = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
