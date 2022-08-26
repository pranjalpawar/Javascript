// program one 

class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }
    display(){
        console.log(this.firstName + " " + this.lastName)
    }
}

class Father extends GrandFather {

    greet(){
        console.log('hello')
    }
}

let Eknath = new Father("Dattatrya","pawar")
console.log(Eknath.firstName)
console.log(Eknath.lastName)
Eknath.display()
Eknath.greet()
console.log(Eknath)

let Dattatrya = new GrandFather("dattatrya","pawar")
console.log(Dattatrya)
Dattatrya.display()
//Dattatrya.greet()    // this will not work bcoz child access father property
// but father does not access child property

// program 2

class GrandFather2 {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln

    }
    display(){
        console.log(this.firstName +" "+ this.lastName)
   }
}

class Father2 extends GrandFather2{
    constructor (gFatherName,lastName,fFirstName){
        super(gFatherName,lastName)
        this.fFirstName = fFirstName
    }
    display(){
        console.log(this.fFirstName +" "+ this.lastName)
        super.display()
    }
}

let Eknath2 = new Father2("dattatrya","pawar","eknath")
console.log(Eknath2.firstName)
console.log(Eknath2.fFirstName)
console.log(Eknath2.lastName)
Eknath2.display()

// progarm 3 

class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }
    displayName(){
        console.log(this.firstName +" "+ this.lastName)
    }
}

class Teacher extends Student {
    constructor(fn,ln,salary){
        super (fn,ln)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

class Professor extends Teacher {
    constructor(fn,ln,salary,spec){ 
        super(fn,ln,salary)
        this.spec = spec     //  spec(Specialization)
    }
    displaySpec(){
        console.log(this.spec)
    }
}

let pranju = new Professor("pranju","pawar",80000,"marathi")
console.log(pranju.spec)
console.log(pranju.salary)
pranju.displayName()
console.log(pranju)
