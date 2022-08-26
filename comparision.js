// number + string = string
// string + number = string
// string + string = string
// number + number = number

let p = 10
let q = 20
let r = "hello"

console.log(p+r+q)
// 10hello20
console.log(r+q+p)
// hello2010
console.log(q+r+p)
// 20hello10

// concat =====> used for attached two string
let person = "pranjali "
let age = "26"

console.log(person + '\n'+ age)

// string literals , string intrepolation

console.log (" My first name is " + person + " and my age is " + age)

console.log (`my first name is ${person} and my age is ${age}`)

// comparision operator
// < , > , <= , >= , == , === , != , !===
// return = boolean 

console.log(16>9)
console.log(9==='9')
console.log(8!=='8')
console.log(6=='6')
console.log(6>=5)
console.log(15<15)

// typeof()

console.log(5=='5')
console.log(typeof 5)
console.log(typeof '5')

console.log(1>3)
console.log(2<4)

// logical operators

// AND &&
// true + true = true
// true + false = false 
// false + true = false
// false + false = false
console.log(10>10 && 10!=='10')
console.log(20<=20 && 20==='20')

// OR ||
// true + true = true
// true + false = true 
// false + true = true
// false + false = false
console.log(3 > 6 || 6 == '6')
console.log(5>=5 || 5!=='5')


// NOT !
// true = false
// false = true
console.log(10!=='9')
console.log(45!==45)

// conditional statement 
// return boolean value (true/false)

//if ( conditio){
     //if condition is true then 1st block is run
//}
//else 
//{
    // if condition is false then 2nd block is run
//}

if ( 6!=='6'){
    console.log('yes')
}
else
{
    console.log('no')
}

if (6!=='6'&& false){
    console.log('hello')
}
else
{
    console.log('go')
}
if (5>=5 || false){
    console.log("pranju")
}
else
{
    console.log("pooja")
}

// truthy and false values in js 
// True = 1 , -1 , a , 6 > 5

// False = undefined , null , nan, 0 , false , 7==="7"

if (undefined){
    console.log("piya")
}
else
{
    console.log("riya")
}

if (p){
    console.log("yes")
}
else
{
    console.log("no")
}