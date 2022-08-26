// slice()
//               0         1          2          3
let names = ["prasad","pranjali","pratiksha","mohini"]
//              -4        -3         -2          -1

//console.log(names.slice(2))
//console.log(names.slice(-1,2))

// splice()

let names2 = ["pranay","prachi","pranav","pratik"]
names2.pop()
names2.shift()
console.log(names2)

// names2.splice(startingIndex,number of el to be deleted)

names2.splice(1,2)
console.log(names2)

// with replacement
names2.splice(1,2,"pranjali","nilesh")
console.log(names2)

// flat()
//multiple dimensional array 

//               0         1            2          3
let numbers = [[1,2,3],[11,22,33],[111,222,333],[14,15,16]]
console.log(numbers[0][0])
console.log(numbers[3][0])
console.log(numbers[1][2])
console.log(numbers[2][0])

let ttt = numbers.flat()
console.log(ttt)

// fill()

//            0   1   2   3   4   5   6   7   8   9   10
let marks = [ 22 ,33 ,44 ,55 ,14 ,20 ,30 ,45 ,11 ,40 ,50 ]
let p = marks.fill('pk',3,5)
console.log(p)
