// Encapsulation 
// object properties you can not directly acess 
// object property you can update with  method only

class Person {
    constructor(fn,ag,salary){
        this.firstName = fn
        this.age = ag
        this.salary = salary

    }

    updateFirstName(nm){
        this.firstName= nm
    }
    
    updateage(age){
        this.age = age
    }
    updatesalary(sal){
        this.salary = sal
    }

    getFirstname(){
        return this.firstName
    }
    getAge(){
        return this.age
    }
    getSalary(){
        return this.salary
    }
    
}

let pranjali = new Person('pranjali','pawar',26,25000)

// program 1 
/*
const a = 10
if (true){
    let aa = 10
}
{
    let c = 20
}

console.log(a) // 10 
console.log(aa)  // not update
console.log(c)  // not update
/*** */
// functions

const PrintName = function(){
    let firstName = "pranjali "
    let lastName = "pawar"

    let PrintFullName = function(){
        console.log(firstName + lastName)
    }
    return PrintFullName
}
PrintName()()

// closure

function add(){
    let a = 10
    let b = 20
    return function(){
        console.log(a)
        console.log(b)
    }
}

let a = add()
a()

// program 2 

const printName = function(){
    let firstName = "priya "
    let lastName = "patil"

    let PrintFullName = function(){
        console.log(firstName + lastName)
    }
    return PrintFullName
}

printName()()

// program 3 

class Person2 {
    constructor(){
        let firstName = "pooja "
        let lastName = "pawar"

        this.printName = function(){
            console.log(firstName + lastName)
        }
    }
}

let obj = new Person2()
obj.printName()
//console.log(firstName)
//console.log(lastName)

// program 4 

class Info {
    constructor(firstName,lastName){
        this._firstName = firstName
        this._lastName = lastName
        this.printName = function(){
            return this._firstName + this._lastName
        }

    }
}

let riya = new Info ("riya ","hindole")
console.log(riya.printName())

console.log(Info)                // class info
console.log(Info.firstName)      // undefined