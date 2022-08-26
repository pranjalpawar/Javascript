// Math
// floor() ===> showing the down no 
// ceil() ===> showing the top no 
// round() ===> if no is .4 then showing down no 
// && if no is .5 then showing the top no 
// random() ===> showing the random no 
// 0.099 random no 
// *2 ==> 1.99
// *3 ==> 2.99
// *4 ==> 3.99
// *5 ==> 4.99
// *6 ==> 5.99
// *6 +1 ==> 1,2,3,4,5,6
/*
console.log(Math.floor(12.4))  // 12
console.log(Math.ceil(10.36))  // 11
console.log(Math.round(12.5))  // 13
console.log(Math.round(10.3))  // 10


Math.random()  // 0.99
let e = Math.random() * 6
console.log(Math.floor(e) + 1)   // o/p random no 1 to 6

// PromptMethod()

let randomNo = Math.floor(Math.random() * 6) + 1
console.log(randomNo)

let userName = prompt('Enter the number')
if (userName == randomNo) {
    console.log('Your guess is correct')
}
else {
    console.log('Your guess is incorrect')
}

//program 2 using foor loop

let randomNo2 = Math.floor(Math.random() * 6) + 1
console.log(randomNo2)

for (let i = 0; i < 5; i++){
    console.log('Guess No', i+1)

    let userName = prompt(`Enter the no `)
    if(userName == randomNo2){
        console.log(`Your guess is correct`)
        break
    }
    else{
        console.log(`Your guess is incorrect`)
    }
}

// program 3 using while loop 

let randomNo3 = Math.floor(Math.random() * 6) + 1
 console.log(randomNo3)

 let userInput = prompt('Enter the num')

 while(randomNo3 != userInput){
    userInput = prompt('Enter the num')
    if (userInput == randomNo3){
        console.log(`Your guess is correct`)
    }
    else{
        console.log(`Your guess is incorrect`)
    }
 }

 // using do while loop 

 let number = Math.floor(Math.random() * 6) + 1
 console.log(number)

 let userInput2 = prompt(`Guess any no btwn 1 to 6`)  

 while(userInput2 != number){
     userInput2 = prompt(`Guess any no btwn 1 to 6`)
     if (number == userInput2){
         console.log(`Your guess is correct`)
         break
     }
     else{
         console.log(`Your guess is incorrect`)
     }
 }
 
// using do while loop 

 do {
     if (number == userInput2){
         console.log(`Your guess is correct`)
         break
     }
     else {
         console.log(`Your guess is incorrect`)
     }
    } while (userInput2 != number)

    /*** */

    console.log(Math.ceil(math.random)*6)