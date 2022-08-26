// object -- > 

// property and method

// object literals

let pranjali = {
    firstNmae: "pranjali",
    lastName: "pawar",
    age: 26,
    calBirthYear:function(){
        console.log(2022 -this.age)
    }
}

// .dot notation 
console.log(pranjali.firstNmae)   // retrive

pranjali.age = 28
console.log(pranjali.age)  
console.log(pranjali)       // update

pranjali.city = "latur"           
console.log(pranjali.city) 
console.log(pranjali)       // add

delete pranjali.city
console.log(pranjali)       // delete

// [] bracket notation
console.log(/-------------------------------/)
console.log(pranjali['firstNmae'])   // retrive

pranjali.age = 28
console.log(pranjali['age'])  
console.log(pranjali)       // update

pranjali.city = "latur"           
console.log(pranjali['city']) 
console.log(pranjali)       // add

delete pranjali['city']
console.log(pranjali)       // delete

pranjali.calBirthYear()

priya = {
    firstName: "priyanka",
    lastName: "pawar",
    age: 24,
    calBirthYear: function(){
        console.log(2022 - this.age)  // value of this is priya 
       // console.log(2022 - priya.age) 
    }

}
console.log(priya)
priya.calBirthYear()

let prasad = {
    firstNmae: "prasad",
    lastName: "pawar",
    age: 22,
    city: "latur",
    calBirthYear: function(){
        console.log(2022 - this.age)
    }
}
prasad.calBirthYear()
console.log(prasad)

// object literal
// Different ways to create object

// 1) object literal
// 2) function constructor
// 3) Es6 class
// 4) object.create()

// function constructor

let Person = function (fn,ln,){
    this.firstNmae = fn
    this.lastName = ln 
}
let sakshi = new Person("sakshi","patil")
console.log(sakshi)

// update
sakshi.firstNmae = "pranju"
sakshi.lastName = "pawar"
console.log(sakshi)

// function constructor

let Person2 = function(fn,ln,ag,rno,cty,sks){
    this.firstName = fn
    this.lastName = ln
    this.age = ag 
    this.rollno = rno
    this.city = cty 
    this.skills = sks 
}
let pari = new Person2("pari","patil",25,45,"latur",["java","css"])
console.log(pari)

let pranavi = new Person2("pranavi","shinde",30,55,"pune",["html","c#"])
console.log(pranavi)

// method 

Person2 = function(fn,ln,ag,rn,sks){
    this.fullName = fn
    this.lastName = ln 
    this.age = ag 
    this.rollno = rn 
    this.skills = sks
    this.numberSkills = function(){
        console.log(this.skills.length)
    }
}

let payal = new Person2("payal","patil",22,45,["html","java"])
console.log(payal)
payal.numberSkills()
console.log(payal.fullName)

let ovi = new Person2("ovi","more",18,55,["css","cpp","c"])
console.log(ovi)
ovi.numberSkills()

console.log(payal instanceof Person2)  // instanceof means payal Person2 pasun tayar zala ahe 
console.log(ovi instanceof Person2)
console.log(payal.__proto__ === Person2.prototype)
console.log(ovi.__proto__ === Person2.prototype)