// program one 

// loops
//                0    1    2                 
let birthYear = [1998,1994,1996]
let ages = []   //24   28   26
for (let i=0;i<birthYear.length;i++){
    console.log(2022-birthYear[i])
    let cAge = 2022-birthYear[i]
    ages.push(cAge)
}
console.log(ages)

// program two 

// filter >10

let agec =[11,20,25,28,30,1,2,9,8,4,5]
let above10=[]
for (let i=0;i<agec.length;i++){
    console.log(agec[i])
    if(agec[i] > 10){
        above10.push(agec[i])
   }
}
console.log(above10)

// program three


// sum

let numbers = [4,2,4,5]
let sum = 0

for (let i=0;i<4;i++){
    sum = sum + numbers[i]
    //     0  +  4 =====> 4
    //     4  +  2 =====> 6
    //     6  +  4 =====> 10
    //     10 +  5 =====> 15
}
console.log(sum)

// program four

let name = ["pranjali","priya","prasad"]
// Welcome pranjali
// Welcome priya
// Welcome prasad

for (let i=0;i<name.length;i++){
    console.log (' Welcome '  +  name [i])
}


    


