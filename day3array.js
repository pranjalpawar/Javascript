// Program One

let ages = [15,18,21]
 [2007,2004,2001]
let birthYear = []
for ( let i=0; i<ages.length; i++){
   let by = 2022-ages[i]
   birthYear.push(by)
}
console.log(birthYear)

// map 
 
let aaa = ages.map(function(el){
   return 2022-el
})
console.log(aaa)

let asat = [11,23,45]
let bbb = asat.map(function(el){
    return el +2
})
console.log(bbb)

/***********************************/

// Program Two

let numbers = [22,33,44,55,11,22,33,44,1,4]
let obove20= [ ]
for ( let i =0; i<numbers.length; i++){
   console.log(numbers[i])
   if(numbers[i]> 20){
        obove20.push(numbers[i])
    }
}
console.log(obove20)

// array---filter()

let ccc = numbers.filter(function(el,index,arr){
   return el > 20
})
console.log(ccc)

let bn = [22,33,44,55,33,22,11,66]
let iii = bn.filter(function(el){
    return el > 50
})
console.log(iii)

// Program Three

let su = [11,22,33]
let total = 0
for ( let i=0; i< su.length; i++){
    total = total + su[i]
}
console.log(total)

// reduce

let iiy = su.reduce(function(acc,el){
    return acc + el 
},5)
console.log(iiy)

// Program Four

let names = ["priya","pranju","riya"]
for ( let i=0; i< names.length; i++){
    console.log(" Hello " + names[i])
}

// forEach()

let tt = names.forEach(function(el){
    console.log(" Hello " + el)
})
