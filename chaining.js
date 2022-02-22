// declare variable based on the name of an object property

const myObject = {x: 2, y:50, z: 599, a: 40, b: 50, c:60};

const {x , y} = myObject;


// distructing array
const [best, friend] = ["friend", "Mahmudul Hasan"];

// console.log(best, friend);

// nasted object
const university = {student: 5000, teacher: 300, computer: {asus: 'coreI5', lenevo: 'coreI7'}, 
canteen: {chari: 70, table: 30, plate: 500, glass: 40}}

// const {student} = {student: 5000, teacher: 300, computer: {asus: 'coreI5', lenevo: 'coreI7'}, 
// canteen: {chari: 70, table: 30, plate: 500, glass: 40}}

// optional chaining. if get the result then operation will continue or result will be undefied
// console.log(university?.device?.samsung);

// if any value is undefined ? mark will make it undefined not error
console.log(university?.computer?.asus);
console.log(university?.device?.computer.asus);




