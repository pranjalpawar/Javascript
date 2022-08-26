// loops ??
// for loop

// Syntax ====>
// for(intialization ; conditionCheck ; incrementDecremt){
//     // statements 
// }

// program one

for(let i = 0 ; i < 3 ; i++){ // 1 // 2 // 3
    console.log(i) // 0 , 1 , 2

}

console.log('-----------------------------')

//program 2

for(let i = 1 ; i <= 10 ; i++){
    console.log(i)
}

// program 3

for(let i = 2 ; i <= 20 ; i = i + 2){ // 2------------------22
    console.log(i)  // 2  , 4 ,6 ,8 , 10 ,12,14,16,18,20
}

// break ====> loop exists immediately 
for(let i = 0 ; i < 5 ; i ++){  // 1 // 2 // 3
    console.log(i) // 0 ,1 , 2 ,3
    if(i == 3){
        break;
    }
}

for(let  i = 0 ; i < 5 ; i++){  // 1 //2 // 3
    if(i == 3){
        break
    }
    console.log(i)  // 0 ,1 , 2
}


// continue statment with for loop 

console.log('continue statement')
for(let i = 0 ; i < 5 ; i++){ //1 //2 // 3 // 4 // 5
    if(i == 3){
        continue
    }
    console.log(i)  // 0 ,1 , 2 , 4
}


for(let i = 0 ; i < 3 ; i++){  // 1 // 2 // 3
    if(i == 1){
        continue
    }
    console.log(i)  // 0 , 2
}


// while loop 

let k = 0 
while(k <= 5){
    console.log(k)
    k ++
}


let o = 2 
while(o <= 20){
    console.log(o)
    o = o + 2
}

let l = 20

while(l >= 2){
    console.log(l)
    l = l - 2
}

// break 

let h = 5 
while(h >=0 ){  
    console.log(h) // 5 // 4 // 3 // 2 // 1 // 0
    h -- // 4  // 3 // 2 // 1 // 0 // -1
}

// break statement 

let ia = 0

while(ia < 5){  
    if(ia == 3){
        break
    }
    console.log(ia) // 0 ,1 , 2
    ia ++  // 1 // 2 // 3
}


let n = 0

while(n < 5){
    if(n == 2){
        n ++ // 3
        continue
    }
    console.log(n) // 0 , 1 , 3 , 4
    n ++  // 1 // 2 // 4 // 5
}

// floor()
console.log(Math.floor(2.3))  // 2
console.log(Math.floor(4.9))  // 4
console.log(Math.floor(5.5))  // 5

// ceil()
console.log(Math.ceil(2.6))  // 3
console.log(Math.ceil(5.5))  // 6
console.log(Math.ceil(6.1))  // 7
console.log(Math.ceil(9.99)) // 10

// round()
console.log(Math.round(2.4))  // 2
console.log(Math.round(2.5))  // 3
console.log('------')

//dice  Random()
// 1 to 6 
//  random()===0.99
// random()*5 ===>4.99
// random()*6 ===>5.99
let randomNo = Math.floor(Math.random()*6) + 1
console.log(randomNo)

