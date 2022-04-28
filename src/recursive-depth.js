const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
  // constructor() {
  //   this.depth = [];
  // }

  // calculateDepth(arr) {

  //   if (Array.isArray(arr)) {
  //     let subDepth;

  //     for (let i = 0; i < arr.length; i++) {
  //       if (Array.isArray(arr[i])) {
  //         depth += 1;
  //         let newCalc = new DepthCalculator();
  //         this.depth += newCalc.calculateDepth(arr[i]);
  //         this.depth.push(subDepth);
  //       }
  //     }
  //   }

  //   return this.depth;
  // }
// }

module.exports = {
  DepthCalculator
};


// let depth = 0;

// function calculateDepth(arr) {
//   let subDepth;

//   if (Array.isArray(arr)) {
//     subDepth = 1;

//     for (let i = 0; i < arr.length; i++) {
//       subDepth += calculateDepth(arr[i]);
      
//       console.log(subDepth, depth);
//       depth = Math.max(depth, subDepth);
//     }

//   } else {
//     subDepth = 0;
//   }

//   return depth;
// }


