// Three types of functions
// 1. Function Declaration

function add (x,y){
    console.log(x+y)
}
add(10,20)

function sub (x,y,z){
    console.log(x-y-z-x)
}
sub(12,5,7)


// 2. Function Expression
let add2 = function(x){
    console.log("wlcm " + x)
}
add2("pranju")

// 3. Arrow function 

let add3 = (x)=>{
    console.log("wlcm " + x)
}
add3("pranju")