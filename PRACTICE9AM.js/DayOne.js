//  javascript 

let x = 10 
x = 20
console.log(x)

// const 

const c = 100
//c = 300
console.log(c)


// Arithmetic operation 


// + - * / % 

let x1 = 10 
let y1 = 5

console.log(x1+y1)
console.log(x1-y1)
console.log(x1*y1)
console.log(x1/y1)
console.log(x1%y1) // remainder


let d = 20
let e = 5



console.log(d+e)
console.log(d-e)
console.log(d*e)
console.log(d/e)
console.log(d%e)

// 10 - 50 pairs 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,10)
Calculator(1200,100)


//  function without parameter and without return  type


function add(){
    console.log(9+9)
}
add()
add()
add()


// function with paramter and without return type

function add2(x,y){
    console.log(x+y)
}

add2(12,13)
add2(22,33)


//function with parameter and with return type

// 100 - given  ==> 50 ,100, 0.10
// 100 - show ==> 

function add3(x,y){
    return x+ y
}

let aa = add3(12,13)
console.log(aa)
console.log(aa + 40)
console.log(aa - 5)
console.log(aa * .10)

//  type 

// calm --- speaks less , introvert 
// loud -- speaks more , extrovert 

let aaa = 10  // 8.3 ,-2 ,1
console.log(typeof aaa)

let b = "hello"
console.log(typeof b)

let ca = true 
console.log(typeof ca)


// comparison

// < > <= >= != == , === , !==

// entity < entity  =====> boolean (true or false)

console.log(4 > 3)
console.log(4 < 3)
console.log(5 >= 5)
console.log(6 <= 6)
console.log(7 <= 8)
console.log(7 == 7)
console.log(8 != 9)

// 

console.log(typeof 7)
console.log(typeof '7')

//==  value --- 
console.log(7 == '7') // true
// ===   value && type
console.log(7 === '7') // false
//===   value and type 
// !== value and type
// ==  value
// != value
console.log(7 === '7') // false
console.log(7 !== '7') // true
console.log( 6 == '6')
console.log( 6 !== 6) // false


// logical operator

// AND OR NOT 


//AND  && 


// True True ==> True 
console.log(7 === 7 && 7 == '7')
// False True ==> False
console.log(4>5 && 6 == 6)
// False True ==> False
console.log(false && 8 !== 8)
// False False ==> False
console.log(4 === 5 && 5 === '5')



//OR  ||
// True True ==> True 

console.log(4 >= 3 || 3 == 3)
// False True ==> True
console.log(false || 6 === 6)
// False True ==> True
console.log(3 === '2' || 5 == 5)
// False False ==> False
console.log(6 === '6' || 5 !== 5)

// Not 

// True False 

console.log(!(5 !== 5))
// False True
console.log(! (7 === 7))