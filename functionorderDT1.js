
// array string object function
// function object , function , string , number 

// number as parameter to function 

function addition(x , y ){
    return x + y
}

let p = addition( 20,30)
console.log(p)

// string a parameter to function

// vowels // a e i o u 
function countVowels(word){
    // let word = "chinmay"
    let count = 0 
    for (let i = 0; i < word.length ; i ++){
        word[i] = word[i].toLowerCase()
        if ( word[i] == "a" || word[i] =="e" || word[i] =="i" || word[i] =="o" || word[i] =="u"){
            count = count + 1

        }
    }
    return count
}

let total = countVowels("chinmay") //2
console.log(total)

let key = countVowels("pranjali") //3
console.log(key)

// string are immutable , can not chnange single character

let n = " poorva"
console.log(n[0])
n[0] = "a"
n = "sarika"
console.log(n)

// array as a parameter to function 

let marks = [1,2,3]
function sumAll(arr){
   //  let arr = marks
    arr[0]=23
    console.log(arr)
}
console.log(marks)
sumAll(marks)
console.log(marks)

//
let a = [11,22,33]
let b = a 
b[0]= 99
a[1]= 88

console.log(a)
console.log(b)

let r = [11,22,33]
function sumAll(arr){
    let r1 = arr.reduce(function(acc,el){
        return acc + el 
    },0)
    return r1 
}
let q = sumAll(r)
console.log(q)

// *************
let s = [1,2,3,4,5]
function sum(word){
    let e = word.reduce(function(acc,el,index,arr){
        return acc + el 
    },0)
    return e 
}
let f = sum(s)
console.log(f)

// object 

let info = {
    fname: "pranjali pawar ",
    rno: 25
}

let info2 = info 
info.fname = "riva patil"
console.log(info2)
console.log(info)

// object as a parameter to another function 

let info3 = {
    fullName: "prasad pawar ",
    age: 20
}

function printObj(obj){
    console.log(obj)
    obj.age = 24
}
console.log(info3)
printObj(info3)
console.log(info3)

let info4 = {
    fullNames: "nilima patil ",
    age: 25,
    skills: ["python","html","java"]
}

function printAllobj(word){
    for (let key in word){
        console.log(key, info4[key])
    }
}
printAllobj(info4)
