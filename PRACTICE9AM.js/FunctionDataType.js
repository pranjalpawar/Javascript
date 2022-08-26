// number ,boolean ,string,array 

//1) Function Declaration

function addition(x,y){
    return x + y
}
let p = addition (12,12)
console.log(p)            // 24

//2) Function Expression

let sum = function(a,b){
    return a * b
}
let r = sum(5 ,2)
console.log(r)            // 10

// 3) Arrow Function

let mul = (k,m)=> {
    return k * m 
}
let s = mul(20,30)
console.log(s)           // 600

let mul2 =(l,p)=> l * p
let d = mul2(12,5)
console.log(d)           //60  

// number as a parameter to function
// return type also as a number 

function printNumber(j,h){
   let sum = j + h
   return sum 
}
let newValue = printNumber(12,13)
console.log(newValue)                // 25
console.log(typeof newValue)         // number

// string as a parameter to function
// return value is also string 

function printName(word){
    let greet = "welcome " + word 
    return greet 
}

let newNmae = printName("pranjali")
console.log(newNmae)                  // welcome pranjali 
console.log(typeof newNmae)           // string

// array as a paeameter to function 
// return value is also array 
 //            0   1  2  3  4  5  6  7
let numbers = [10,11,20,22,30,33,44,55]
//            -8 -7  -6 -5 -4 -3 -2 -1
function lastFive(arr){
    let lastF = arr.slice(-5) // [22,30,33,44,55]
    //console.log(lastF)
   return lastF
}
let aa = lastFive(numbers)
console.log(aa[1])

// object as a parameter to function 
// return also object 

let info = {
    firstName: "pranjali",
    lastName: "pawar"
}
// retrive 
console.log(info.firstName)
console.log(info['lastName'])

// update 
console.log(info.firstName = "piya")
console.log(info['lastName'] = "patil")

// add 
console.log(info.city = "pune")
console.log(info['lang'] = "hindi")

// delete 
delete info.lang
delete info['city']

function updateName(obj){
    obj.firstName = "kanika"
    return obj 
}
let hey = updateName(info)
console.log(hey.firstName)
console.log(hey)

// function as parameter to another function 
// for eg
let xx = 10
console.log(xx)

let add = function(xxx,yyy){
    return xxx + yyy
}
function addition(fn){
    //let fn = function(xxx,yyy){   //  behind the seen 
       // return xxx +yyy
   // }
   let sum = (12+14)
   return sum
}
let zz = addition (add)
console.log(zz)

