const numbers = [5, 35, 43, 43, 544, 34, 89, 4, 33, 43, 34, 13, ,33, 3];

const BigNumbers = numbers.filter(number => number> 20);
const smallNumbers = numbers.filter(number => number < 10);


const products = [
    {name: 'Water bottle', price: 50, color: 'black'},
    {name: 'Mobile phone', price: 500, color: 'aqua'},
    {name: 'Smart watch', price: 500, color: 'gold'},
    {name: 'Node', price: 30, color: 'blue'},
    {name: 'Waterglass', price: 30, color: 'white'},
]

const expensive = products. filter(product => product.price > 100);
const black = products. filter(product => product.color == 'hh');

const blueItem = products.find(product => product.color == 'blue' )

console.log(BigNumbers, smallNumbers, expensive, black, blueItem);