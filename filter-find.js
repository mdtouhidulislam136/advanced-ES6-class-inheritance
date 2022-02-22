const numbers = [5, 35, 43, 43, 544, 34, 89, 4, 33, 43, 34, 13, ,33, 3];

const BigNumbers = numbers.filter(number => number> 20);
const smallNumbers = numbers.filter(number => number < 10);

console.log(BigNumbers, smallNumbers);