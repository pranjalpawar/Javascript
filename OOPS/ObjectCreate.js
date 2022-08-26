// Object.create 

// object literal

let Fruits = {
    Name: "Apple",
    Color: "Red",
    Quantity: 12
}

console.log(Fruits)

// function constructor

let Person = function(fn,ln,ag,rno){
    this.firstNmae = fn
    this.lastName = ln 
    this.age = ag 
    this.rollno = rno
}

let Pranjali = new Person("pranjali","pawar",26,45)
console.log(Pranjali)

// Es6 class 

class Info {
    constructor(fn,ln,ag,cty){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.city = cty 
    }
}

let pranju = new Info("pranju","pawar",26,"latur")
console.log(pranju)

// Object.create

let priya = Object.create( {} )
console.log(priya)              // create blank object

// retrive 
// update 
// add 
priya.firstName = "piu"
priya['lastName'] = "pawar"
priya.age = 24
priya.rno = 56
console.log(priya)

// delete

// object create method with prototype 

let pro = {
    cal:function(){
       console.log(2022 - 1996)
    }
}

let pranjal = Object.create(pro)
pranjal.cal()
console.log(pranjal)     // blank object
console.log(pranjal.__proto__)      // showing function

let prototype = {
    cal(){
        console.log(2022 - 1994)
    },
    init(fn,ln,ag,rno){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollno = rno 
    }
}

let pooja = Object.create(prototype)
pooja.init("pooja","pawar",28,52)
console.log(pooja)
pooja.cal()