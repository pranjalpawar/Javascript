
// map()
let numbers = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]

let ary = numbers.map(function(el,index,arr){
    return el  * 2
})
console.log(ary)

// filter()

let klm = [100,200,-23,33,-400] 

//deposit = [100,200,33]
//withdrawl = [-23,-400]

let deposite = klm.filter(function(el,index,arr){
    return el > 0
})
console.log(deposite)

let withdrawl = klm.filter(function(el,index,arr){
    return el < 0 
})
console.log(withdrawl)

// reduce()

let total = deposite.reduce(function(acc,el){
    return acc + el
},0)
console.log(total)

let total1 = withdrawl.reduce(function(acc,el){
    return acc + el
},0)
console.log(total1)

// forEach()

let wish = ["pranjali","priyanka","mahi","pvn"]
wish.forEach(function(el){
    console.log(' happy birthday ' + el)
})

// find()
//       0  1  2  3  4  5  6  7
let k = [22,33,44,11,22,33,44,55]

let pp = k.filter(function(el){
    return el > 30
})
console.log(pp)

let ppk = k.find(function(el){
    return el > 30
})
console.log(ppk)

// findIndex()

let ppo = k.findIndex(function(el){
    return el >= 21 
})
console.log(ppo)

// every()

let z = [11,12,33,44,55,11,33,4]

let yyy = z.every(function(el,index,arr){
    return el > 10
})
console.log(yyy)
 
// some()

let yyya = z.some(function(el,index,arr){
    return el > 10
})
console.log(yyya)

// slice()
//            0         1      2       3        4      5
let mn = ["pranjali","priya","pooja","prasad","riya","swara"]
//          -6        -5       -4      -3      -2      -1

// mn.slice(start,end(//end is not included))

console.log( mn.slice(-1,-4))
console.log( mn.slice(-4))
console.log( mn.slice(1,4))
console.log( mn.slice(-6))
console.log( mn.slice(1,-4))
console.log( mn.slice(1,-6))
