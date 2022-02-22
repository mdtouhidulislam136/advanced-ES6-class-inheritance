
class Team{
    name;
    designation = 'Student care';
    address = 'Finland';
    constructor(name, designation, address){
        this.name = name;
        this.address = address;
        this.designation = designation;
    }
}

class NaptuneApp extends Team{
   
    groupSupportTime;
    constructor(name, address, designation,time){
        super(name,address,designation);
        this.groupSupportTime = time;
    }

    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }

    
}


class Support extends Team {
    
    startSession(){
        console.log( this.name,'start a support session')
    }
}

class StudentCare extends Team{
    codeEditor;
    constructor(name,address,designation, editor){
    super(name,address,designation);
    this.codeEditor = editor;
    }

    buildRoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
    
}

const amir = new Support('Hossain', 'finland');
amir.startSession();

//created object
const salman = new Support('salman khan', 'India', 'mumbai', 12);

const binti = new StudentCare('binti priya', 'vainamoisenkatu 11', 'BD', 'vs code');
const obonti = new StudentCare('obonti', 'vainamoisenkatu 11', 'I am going to make a app');
const me = new NaptuneApp('robin', 'Finland', 'trying to change verison', 11);
me.releaseApp('4.2.3');


console.log(me, salman, binti);

