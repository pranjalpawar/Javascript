// set the value of this 
// object cha baher method call kelya nntr this cha refrence jatoy 
// mhnun tya vrti solution mhnun bind(),call(),apply()method use kratat 

let Person = {
   firstName: "pranjali ",
   lastName: "pawar",
   printName: function(){
       console.log(this.firstnmae + this.lastName)
   }
}

console.log(Person)    // full object 
console.log(Person.printName)       // function expression 

// undefined + undefined = NaN (not a number)

// program 1 
// in this object .this refrence is remove 
let pranjali = {
    firstName: "pranjali ",
    lastName: "pawar",
    displayName: function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(pranjali)
console.log(pranjali.displayName)

// solution
// program 2 // bind()===> return function 

let piya = {
    firstName: "piya ",
    lastName: "pawar"
}

let riya = {
    firstName: "riya ",
    lastName: "hindole"
}

let displayName = function(){
    console.log(this.firstName + this.lastName)
}

displayName.bind(piya)()
displayName.bind(riya)()


function add(){
    return function(){
        console.log("hello")
    }
}

add()()

// call() ===> return nothing 

function displayName2(){
    console.log(`Hello ${this.firstName} ${this.lastName}`)
}
let prasad = {
    firstName: "prasad ",
    lastName: "patil"
}

let kumar = {
    firstName: "kumar ",
    lastName: "hindole"
}

displayName2.call(prasad)
displayName2.call(kumar)

// apply() ====> two parametre i.e 1st this value,2nd in array["msg"]

let display = function(greet){
    console.log(`${greet} ${this.firstName} ${this.lastName}`)
}

let prasika = {
    firstName: "prasika ",
    lastName: "patil"
}

let kalyani = {
    firstName: "kalyani ",
    lastName: "rao"
}

display.apply(prasika,["welcome to the programing world"])

display.apply(kalyani,["hello"])

// program 3 

let b = {
    firstName:"pranjali",
    lastName:"pawar",
    displayName: function(){
        console.log(this)
        console.log(this.firstName , this.lastName)
    }
}

b.displayName()

let p = {
    firstName:"pranjali",
    lastName:"pawar",
    displayName:()=> {
        console.log(this)
        console.log(this.firstName + this.lastName)
    }
}

p.displayName()