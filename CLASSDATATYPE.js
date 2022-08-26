//object literal

let pranjali = {
    firstName: "pranjali1",
    lastName: "pawar",
    rollNo: 45,
    age: 26
}

let ravi = {
    firstName: "ravikiran",
    lastName: "patil",
    rollNo: 25,
    age: 46
}

let kiran = {
    firstName: "kiran",
    lastName: "mane",
    rollNo: 56,
    age: 27
}

 // setting the value outside the class 

 class person {
     firstName = undefined
     lastName = undefined
     age = undefined
     city = undefined
 }

 let suraj = new person()
 //console.log(suraj)
 suraj.firstName = "suraj"
 suraj.lastName = "patil"
 suraj.age = 28
 suraj.city = "pune"
 console.log(suraj)

 // constructor are used to
 // set the property value at the time of object creation 

 class person2 {
     constructor(fn,ln,ag,ct){
        this.fullName = fn 
        this.lastName = ln 
        this.age = ag
        this.city = ct
     }
     
}

let purva = new person2 ("purva","pawar",30,"pune")
console.log(purva)

let pranjali2 = new person2 ("pranjali2","pawar2",26,"latur")
console.log(pranjali2) 

// by using set method 

class person3 {
    setfullName(fn){
        this.fullName = fn
    }
    setlastName(ln){
        this.lastName = ln 
    }
    setcity(ct){
        this.city = ct
    }
}

let kranti = new person3 ()
console.log(kranti) // blank object
kranti.setfullName("kajal")
kranti.setlastName("more")
kranti.setcity("latur")
console.log(kranti) // updated value 
