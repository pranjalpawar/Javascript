// Es6 class 

class Person {
    constructor (fn,ag,rn){
        this.fullName = fn
        this.age = ag 
        this.rollno = rn  
     }
     displayName(){
         console.log(this.fullName)
     }
}

let pranju = new Person("pranju pawar",26,45)
console.log(pranju)

class Vehicle {
    color = undefined 
    regno = undefined 
    city = undefined
}

let Audi = new Vehicle()
console.log(Audi)

Audi.color = "red"
Audi.regno = 12345
Audi.city = "latur"
console.log(Audi)

// using constructor 

class Vehicle2 {
    constructor( color,regno,city){
        this.color = color 
        this.regno = regno
        this.city = city 
    }
}

let bmw = new Vehicle2("black",14785,"pune")
console.log(bmw)

// set method 
class Vehicle3 {
    setColor(cl){
        this.color = cl 
    }

    setReg(rg){
        this.rg = rg
    }

    setCity(cty){
        this.city = cty
    }

}

 let maruti = new Vehicle3()
 console.log(maruti)
 maruti.setCity("pune")
 maruti.setColor("black")
 maruti.setReg(1234)
 console.log(maruti)

 // Es6 ===> make ur code more modern
 // class madhe object ajun changle designe karnya sathi 4 method use krtat i.e 
 // 1) Inheritance
 // 2) Encapsulation
 // 3) Polymorphism
 // 4) Abstraction  ====> Interface --- typescript 
