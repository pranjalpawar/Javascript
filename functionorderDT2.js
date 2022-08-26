function add (x , y){
    console.log(x + y)
}
add (13,14)

let x = 10 
console.log(x)

let addition = function (x , y){
    console.log(x + y)
}

addition (12,13)
//console.log(addition) // printing the function defination for arrow function

let substraction = function(x , y){
    return x-y
}

let p = substraction(12,13)
console.log(p)

function substractionSecond(fn){
  //  let fn = function(x , y){
      //  return x-y
  //  }
    let p1 = fn(30,20)
    return p1
}

let p3 = substractionSecond(substraction)
console.log(p3)

/**************************************/
// return number 
function returnStory(){
    return 33
}

let rr = returnStory()
console.log(rr)   // 33

// return string
function returnStory1(){
    return " pranjali pawar "
}

let rr1 = returnStory1()
console.log(rr1[0]) // p

// return array 
function returnStory3(){
    return [11,22,33,44,55,66]
}

let a = returnStory3()
console.log(a[a.length-1]) // 66

// return object 

function returnStory4(){
    return {
        fname: "pranjali",
        lname: "pawar"
    }
}

let k = returnStory4()
for (let key in k){
    console.log(key , k[key])
}

// return function 

function addition3(){
    let x= function (){
        console.log('hello')
    }
    return x
}

let g = addition3()
g()

function substraction2(x){
    console.log(x)
}
substraction2(23)