// object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  
  const PI = freezeObj();
  
  console.log(PI);

// anonymous function
var magic = () => new Date();

// higher order arrow function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

reducing array
const sum = (function() {
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3, 4));