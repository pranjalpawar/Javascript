//Asynchronous vs synchronous 


// synchronous execution 

function addition (){
    console.log(9 + 9)
}
function addition2(){
    console.log(12 + 12)
}
addition2()        // 24
addition()         // 18

// asynchronous 

function add (){
    setTimeout(function (){
        console.log(1 + 1)
    },2000)
}
function add2 (){
    console.log(5 + 5)
}
add()    // run after 2sec op is 2
add2()   // run quickly op is 10

// real time -----API ----asynchronous 
// create user
// id 
// id - get 
// id update 
// id delete 


// asynchronous
function check(){
    setTimeout(function (){
        console.log('user created')
    },3000)
    
    setTimeout(function(){
        console.log('id retrived')
    },1000)

    setTimeout(function(){
        console.log('get user by id')
    },2000)

    setTimeout(function(){
        console.log('update user by id ')
    },2000)

    setTimeout(function(){
        console.log('delete user by id ')
    },3000)
}
check()

// cypress + js 
// using call back hell 

function info (){
    setTimeout(() => {
        console.log('user created')
        setTimeout(() => {
            console.log('id retrived')
            setTimeout(() => {
                console.log('retrive user by id')
                setTimeout(() => {
                    console.log('update user by id')
                    setTimeout(() => {
                        console.log('delete user by id ')
                    },1000);
                },1000);
            },2000);
        },3000);
    },4000);
}
info()

// promises ====> 1)pending 2)resolve 3)reject

let pro = new Promise(function(resolve , reject){
    let a = 10
    let b = 20
    if(a==b){                 // condition false op is bye
        resolve("hello")
    }
    else{
        reject("bye!")
    }
})
// consume
pro.then(function(str){
    console.log(str)    // hello
},function(str){
    console.log(str)    // bye 
})

// if condition is true then op is 'hello' else 'bye'

let pro2 = new Promise(function (resolve,reject){
    let word = "pranjali"

    if (word.length >=8){
        resolve(["hi","hey","hlw"])
    }
    else{
        reject([1,2,3,4])
    }
})
pro2.then(function(arr){
    console.log(arr[1])
},function(arr){
    console.log(arr[0])
})
//o/p is hey bcoz condition is true 

// we can use .catch insted of reject 

let person = new Promise(function(resolve,reject){
    let fruits = "mango"

    if (fruits.length >=6){
        resolve("right")
    }
    else{
        reject("wrong")
    }
})
person.then(function(arr){
    console.log(arr)
})
.catch(function(arr){
    console.log(arr)
})
// o/p is wrong bcoz condition is false

