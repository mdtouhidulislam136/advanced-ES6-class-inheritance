class Support {
    name;
    designation = 'Support web dev';
    address = 'Finland';

    constructor(name, address){
    this.name = name;
    this.address = address;
    }
    startSession(){
        console.log( this.name,'start a support session')
    }
}

const amir = new Support('Hossain', 'finland');
amir.startSession();

const salman = new Support('salman khan', 'India')
console.log(amir, salman)

