let name = "Pranjali"
let middlename = 'Eknath'
let lastname = `Pawar`
console.log(name,middlename,lastname)

/********************************/

let city = "latur"
// 0 1 2 3 4
// l a t u r 
console.log(city.length)
console.log(city[0])

let country = "India"
// 0 1 2 3 4
// I n d i a 

console.log(country.length)
console.log(country[country.length-2])
// length-1 is always the last index.
 
let fruit = "Mango"
//console.log(fruit[2])
for (let i=0; i<fruit.length; i++){
    //console.log(i)
    console.log(fruit[i])
}

// toUpperCase()
let person = "Pranjali"
let aa = person.toUpperCase()
console.log(aa)

//toLowerCase()
let skills = "Javascript"
let bb = skills.toLowerCase()
console.log(bb)

//includes()
let fruits = "Apple"
let cc = fruits.includes('le')
console.log(cc)

//startsWith()
let subject1 = "Marathi"
let dd = subject1.startsWith('thi') 
let dd1 = subject1.startsWith('M') 
console.log(dd)
console.log(dd1)

//endsWith()
let person2 = "pavan"
let ss = person2.endsWith('An')
console.log(ss)
let ss1 = person2.endsWith('an')
console.log(ss1)

// trimStart()
let subject = " Marathi"
console.log(subject.length)
let ll = subject.trimStart()
console.log(ll)
console.log(ll.length)

// trimEnd()
let fname = "pranjali "
console.log(fname.length)
let sp = fname.trimEnd()
console.log(sp)
console.log(sp.length)

// trim()
let fullname = " Pranjali "
console.log(fullname.length)
let sq = fullname.trim()
console.log(sq)
console.log(sq.length)

// indexOf()
let fruit2 = "Apple"
let gg = fruit2.indexOf('p')
console.log(gg)
let gg1 = fruit2.indexOf('P')
console.log(gg1)

// slice
//  0  1  2  3  4  5  6  7
//  p  r  a  n  j  a  l  i
// -8 -7 -6 -5 -4 -3 -2 -1

let abc = "pranjali"
let ww = abc.slice(3)
console.log(ww)
let yy = abc.slice(1,5)
console.log(yy)
let bb2 = abc.slice(-1,-5)
console.log(bb2)
let hh = abc.slice(-6,5)
console.log(hh)

// for loop
let student = "pranjali pawar"
for (let i = 0; i< student.length; i++){
    //console.log(i)
    console.log(student[i] )
}
console.log('-------------------')

// reverse for loop 
let character = "yuvika patil"
for (let i=character.length-1; i>=0; i--){
    console.log(character[i] )
}
