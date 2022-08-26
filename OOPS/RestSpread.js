// rest parameter

function addition(...restArray) {
    console.log(restArray)
    return restArray.reduce(function (acc, el, index, arr) {
        return acc + el

    }, 0)
}
let students = addition(11, 22, 33, 44)
console.log(students)
'--------------------------------------'

function sub(...arr) {
    console.log(arr)
    return arr.map(function (el, index, arr) {
        return el - 2
    })
}
let newValue = sub(1, 2, 3, 4, 5, 6)
console.log(newValue)
'---------------------------------------'

function add(...newarray) {
    console.log(newarray)       // [20,30,44,55,11,88,75,41,21,22]
    return newarray.filter(function (el, index, arr) {
        return el > 50
    })
}
let newNumbers = add(20, 30, 44, 55, 11, 88, 75, 41, 21, 22)
console.log(newNumbers)     // [55, 88, 75]

// Spread parameter

let number = [11, 22, 33, 44, 55, 66]
function addition(a, b, c, d) {
    console.log(a + b + c + d)
}
addition(...number)

'-------------------------------------'
let arr = [1, 2, 3, 4]
//console.log(...arr)

let rra = "1,0,3,4,5"
//console.log(...rra)

let p = [...arr, ...rra]
console.log(p)

'-------------------------------------'
// for of loop 

let person = {
    firstName: "pranjali",
    lastName: "pawar",
    age: 26,
    city: "latur"
}

for (let key in person) {
    //console.log(key )
    console.log(key, person[key])
}

//for of loop in array 

let fruits = ["apple", "cherry", "orange", "mango"]
for (let item of fruits) {
    console.log(item)       // apple cherry orange mango 
}

// for of loop in object 

let info = {
    fullName: "pranjali pawar",
    city: "latur",
    mobNo: 1234567890,
    email: "pranjali@1234"
}

// in for of loop there is three type i.e 
// 1) keys 2) values 3) entries 

// 1) keys 
for (let item of Object.keys(info)) {
    console.log(item)
}

// 2) values 

for (let item of Object.values(info)) {
    console.log(item)
}

// 3) entries 

for (let item of Object.entries(info)) {
    console.log(item)        // print in seprated array 
}

for (let [key, value] of Object.entries(info)) {
    console.log(key, value)     // print in normal object
}

// Ternary operator we can use ternary operator insted of if/else statement 

let a = 10
let b = 20

let ternary = a < b ? "a is greater" : "b is greater"
console.log(ternary)

// how to write in short
// if add +1
let aa = 100
aa++
aa = aa + 1
aa += 1
console.log(aa)

// nullish 
// question mark cha left side la null or undefined asel tr 
// op write side ch yenar 
const num = null ?? 'default string';
console.log(num);

// question mark cha left side la condition true or false ali tr op true ani false ch yenar
const str = 7 === 7 ?? "hello"
console.log(str)

const pqr = 7 === '7' ?? "hey"
console.log(pqr)

const qwerty = 7 === 7 || 10
console.log(qwerty)

const poiuyt = 7 === 7 && 8 !== 8
console.log(poiuyt)

// optional operator 

let value = {
    sister: {
        firstName: "pranjali",
        lastName: "pawar",
        parent: {
            father: "eknath",
            mother: "mukta"
        }

    }
}

console.log(value.sister.parent.mother)
console.log(value?.sisterone?.parent?.father)   // undefined
console.log(value?.sister?.parent?.mother)

console.log(value.sister.parents.mother)  // Cannot read properties of undefined (reading 'mother')
 