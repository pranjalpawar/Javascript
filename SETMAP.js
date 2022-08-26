// SET MAP 
// CLASS ====> avoid the repeatation of object code 

let fruits = {
    name: "apple",
    color: "red"
}
let fruits2 = {
    name: "mango",
    color: "yellow"
}

// setting the value outside the class 

class fruit {
name = undefined
color = undefined
}

let mango = new fruit()
console.log(mango)
mango.name = "mango"
mango.color = "yellow"
console.log(mango)

// constructor are used to set the property 
// value at the time of object creation 

class fruit2 {
    constructor(nm,clr){
        this.name = nm   
        this.color = clr
    }
    
}

let lichi = new fruit2("lichi","dark red")
console.log(lichi)

let papaya = new fruit2("papaya","light orange")
console.log(papaya)

// by using set method 

class fruit3 {
    setname(nm){
        this.name = nm
    }
    setcolor(clr){
        this.color = clr
    }
}

let chiku = new fruit3 ()
console.log(chiku) // blank 

chiku.setname("chiku")
chiku.setcolor("golden")
console.log(chiku)

// set map 
// class 

let carOne = {
    color: "red",
    name: "audi",
    type: "sedane"
}

let carTwo = {
    color: "red",
    name: "audi",
    type: "sedane"
}

// setting the value outside the class 

class Car {
     color = undefined
     name = undefined
     type = undefined
}

let audi = new Car ()
let bmw = new Car()
console.log(typeof audi)
console.log(typeof bmw)

// audi===>

audi.color = "red"
audi.name = "p1"
audi.type = "sedane"
console.log(audi)

// class 

class vehicle {
    constructor(clr,nm,tp){
        this.color = clr 
        this.name = nm
        this.Type = tp
    }
}

let audi1 = new vehicle("red","audi","sedane")
console.log(audi1)

// using set function 

class vehicle2 {
    setcolor(clr){
        this.color = clr
    }
    setname(nm){
        this.name = nm
    }
    setType(tp){
        this.Type = tp 
    }
}

let audi3 = new vehicle2 ()
console.log(audi3) // blank 

audi3.setcolor("red")
audi3.setname("audi")
audi3.setType("sedane")
console.log(audi3)

// array object set 
// set does not stores the duplicate value 

let setA = new Set ([11,11,22,22,33,33,44,55,66])
console.log(setA)
// size() ===> check the size of object
let p = setA.size
console.log(p)

// Add() ===> add the value in the object
setA.add(444)
console.log(setA)

// delete() ===> delete the value in the object 
setA.delete(444)
console.log(setA)

// has() ===> check the value inside the object if value found then op is true else false 
let pp = setA.has(1111)
console.log(pp)

// clear() ===> clear the value in the  object 

setA.clear()
console.log(setA)

let setB = new Set ([22,55,444,1111,20,77,77,20])
console.log(setB)
// item of ===> op is showing one by one 
for (let item of setB){
    console.log(item)
}

// duplicate 

let numbers = [222,22,33,45,78,52,41,22,00,33]
let setC = new Set(numbers)
console.log(Array.from(setC))
Array.from(setC)

let obj2 = {
    firstName: "pranjali",
    lastName: "pawar",
    age: 26
}

// map 

let mapA = new Map()
let arr = new Array() // let r = [2,3,5,4]
let str = new String() // let string = "a"
let obj = new Object() // let obj ={}

// mapA ===> object property and method 

console.log(mapA.size)
// mapA.set(key,value)

mapA.set([22,55,44,33],"marks")
console.log(mapA)

// GET()
mapA.set(true,"isadult")
console.log(mapA.get(true))

// HAS()
let aa = mapA.has(true)
console.log(aa)

// CLEAR()
 mapA.clear()
 console.log(mapA)

 // DELETE()
mapA.delete(true)
console.log(mapA)

let mapB = new Map([
    [1,"rollno"],
    ["color","red"],
    ["true","ismarried"],
    [{a:"s",b:"w"},33]
])
console.log(mapB.size)

for (let a of mapB.keys()){
    console.log(a)                // left side keys(property)is printed  
}

for (let a of mapB.values()){
    console.log(a)                // write side value printed
}

for (let [key,val]of mapB.entries()){
    console.log(key,val)           // both side key and value is printed 
}
