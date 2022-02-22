// destructing 
// from the object we can make different variable

const fish = {id: 54, name: "King fish", price: 9000, phone: '01793483443', address: 'chandpur', dress: 'silver'};


// const phoneNumber = fish.phone

// console.log(phoneNumber);

//destructing
const {id, name, price, phone, address, dress} = fish;

// object and inside obejct
const university = {student: 5000, teacher: 300, computer: {asus: 'coreI5', lenevo: 'coreI7'}, canteen: {chari: 70, table: 30, plate: 500, glass: 40}}

// make variable from the object using destruction
const {plate, glass, table} = university.canteen;

console.log(plate, glass, table);