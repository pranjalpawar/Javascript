let person = ["p1 ","p2 ","p3 ","p4 ","p5 "]

// map()
let p = person.map(function(el,index,arr){
    return "hello " + el
})
console.log(p)

// filter()
let person2 = [1,2,3,4,10,20,30,40]
let q = person2.filter(function(el,index,arr){
    return el > 10
})
console.log(q)

// reduce()
let r = person2.reduce(function(acc,el,index,arr){
    return acc + el
},10)
console.log(r)

// foreach()

let s= person2.forEach(function(el,index,arr){
    console.log( "welcome " + el )
})

// find()

let d = person2.find(function(el,index,arr){
    return el > 10
})
console.log(d)

// findindex()

let y = person2.findIndex(function(el,index,arr){
    return el > 5
})
console.log(y)

// some()

let g= person2.some(function(el,index,arr){
    return el < 5
})
console.log(g)

// every()

let e = person2.every(function(el,index,arr){
    return el > 0
})
console.log(e)

// slice()

let names = ["pranjali","thupaa","babli","piya","ram"]

let o= names.slice(-5,3)
console.log(o)

// reverse

let u = names.reverse()
console.log(u)

// sort()

let k = names.sort()
console.log(k)

//concat
let names3 = ["pooja","piya","riya"]
let l = names.concat(names3)
console.log(l)

let na = names3.concat(names)
console.log(na)

//flat 
//remove the internal array and return the single array 

let num = [[1,2,3],[11,22,33],[111,222,333]]

console.log(num[0])
console.log(num[1][2])
console.log(num[2][0])

let t = num.flat()
console.log(t)

// fill()
let num2 =[12,55,33,88,96,44,55,00]

let ppp= num2.fill("OG",2,5)
console.log(ppp)

let yyy= num2.fill(100,2,6)
console.log(yyy)

// splice()

let names2 = ["p1","p2","p3","p4","p5","p6","p7"]
let uuu= names2.splice(1,5)
console.log(uuu)

