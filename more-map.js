const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Top Solaiman'];

const flength = friends.map(friend => friend.length);
// console.log(flength);


const products = [
    {name: 'Water bottle', price: 50, color: 'black'},
    {name: 'Mobile phone', price: 500, color: 'aqua'},
    {name: 'Smart watch', price: 500, color: 'gold'},
    {name: 'Node', price: 30, color: 'blue'},
    {name: 'Waterglass', price: 30, color: 'white'},
]

const productsName = products.map(product => product.name);
const prodcutPrice = products.map(product => product.price);

products.map(product => console.log(product));
products.forEach(element => console.log(element)); // don't return

console.log(productsName, prodcutPrice);