// function without parametre and without return type

function add (){
    console.log(12+13)
}
add ()
add()

// function with parametre and without return type

function add2(x,y){
    console.log(x+y)
}
add2(20,55)

// function with parametre and with return type

function add3 (a,b){
    return a+b
}
let hh = add3(50,80)
console.log(hh)
console.log(hh+60)
console.log(hh-80)


// // function declaration 

function add(x,y){
    return x + y
}

let aa = add(25,27)
console.log(aa)

// // function expression 

let add2 = function(x1,y2){
    return x1 + y2
}
let rr = add2(12,13)
console.log(rr)


// Arrow function
let add3 = (x1,y2)=>{
    return x1 + y2
}
let rr3 = add3(12,13)
console.log(rr3)




// function as a parameter to another function

function addition(fn){
    let rrr = fn(23,23)
    return rrr

}
let ttt = addition(adda)
console.log(ttt) // 46 

// function as a parameter to another function

let sub = function(x,y){
    return x  - y
}


function subtraction(fn){
    let ttt = fn(12,13)
    return ttt
}

let ccc = subtraction(sub)
console.log(ccc)


// Number as a parameter to function


let a7 = 10

function printNumber(x){
    console.log(x)
}
printNumber(a7)


// String as a parameter to function
let bn  = "chinmay"
function printString(name){
    console.log("welcome "+ name)
}
printString(bn)


// Boolean as a parameter to function

let isMarried = true
function checkBoolean(a){
    if(a){
        console.log('Best luck')
    }
    else {
        console.log('Bye')
    }
}
checkBoolean(isMarried)


// array as parameter to function

//              0        1        2
let fruits = ['apple',"banana","grapes"]
console.log(fruits[0])

function printFirstE(arr){
    console.log(arr[0])
}
printFirstE(fruits)



// object as parameter to function

let obja = {
    firstName:"chinmay",
    lastName:"deshpande"
}


function printFisrt(obj){
    console.log(obj.firstName)
}
printFisrt(obja)



