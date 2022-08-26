// conditional statement 

// mark ==> 'A' || 'B' || 'C'
// marks > 90 ===> A
// marks > 60 && marks <=90 ===>B
// marks < 60 ===> C

let marks = 50
if (marks > 90){
   console.log(' you got A grade')
}
if (marks > 60 && marks <=90 ){
   console.log(' you got B grade')
}
if (marks < 60 ){
   console.log(' you got C grade')
}
/*-----------------------------------*/

if (marks > 90){
    console.log(' you got A grade')
}
else
if (marks > 60 && marks <=90 ){

    console.log(' you got B grade')
}
else
if (marks < 60 ){
    console.log(' you got C grade')
}
else 
{
    console.log('hello')
}

// Switch case 
/*-----------------------------------*/

let city = "Lucknow"

switch(city){
    case "Pune":
    case "Nagpur":    
        console.log('MH')
    case "Bhopal":
        console.log('MP')
    case "Latur":
        console.log('MH24')
    case "Lucknow":
        console.log('UP')
    default:
        console.log('please entre correct city ')               
}

/*----------------------------------------------*/
let city1 = "Latur"

switch(city){
    case "Pune":
    case "Nagpur":    
        console.log('MH')
        break
    case "Bhopal":
        console.log('MP')
        break
    case "Latur":
        console.log('MH24')
        break
    case "Lucknow":
        console.log('UP')
        break
    default:
        console.log('please entre correct city ')               
}

// loops

for (let i = 0 ; i < 5 ; i ++){
    console.log(i)
}

for (let i = 10; i >=0 ; i--){
    console.log(i)
}

/*--------------------------------*/
let k = 0 
for ( ; k <5 ;){
    console.log(k)
    k++
    k = k+1
    k += 1
}

// break keyword
for ( let i = 0; i< 5; i++){
    if(i ==2){
        break
    }
    console.log(i)
}

for ( let i = 0; i < 5; i ++){
    if(i == 2){
        continue
    }
    console.log(i)
}