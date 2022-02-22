
const numbers = [3, 4, 3, 5];
const output2 = [];

// 1. loop
// 2. called element function
// 3. push result in output array
//const doubleNumber = number => number *2
// for (number of numbers){

//     const result = doubleNumber(number);
//     output2.push(result);
    
// }

// console.log(output2);

//const output = numbers.map(doubleNumber );
//const output = numbers.map(number => number *2);

// array map
const output = numbers.map(x => x*2); // map make loop

const squre = numbers.map(x => x*x);
console.log(output, squre);

