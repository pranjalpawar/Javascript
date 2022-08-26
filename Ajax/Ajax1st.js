
// sync and Async 

// Sync 
function add(){
    console.log("one")
}

function add2(){
    console.log("two")
}

add2()
add()

// sync me jo 1st exicute ho vo run hota hai.

// Async 
// it will not stop the exicution ...

function add3(){
    setTimeout (function (){
        console.log("hello")
    },2000)
}

function add4(){
    console.log("bye")
}
add3()                  //it will run after 2 sec. bcoz of async nature 
add4()                  // quickly run.


