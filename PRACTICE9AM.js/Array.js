// Array Method

let names = ["priya","pranju","prasad","riya","kia"]
console.log(names[2])

// for loop 
for(let i = 0; i<names.length; i ++){
   // console.log(i)   // index 0,1,2,3.....
    console.log(names[i])  // array element
}

// property 

let vegetables = ["tomato","potato","cabbage","brinjal"]
console.log(vegetables.length)   // no of element in array = 4
console.log(vegetables[vegetables.length - 1])  // length -1 is always the last index of array

// Methods --- Action and Return type

let fruits = ["mango","orange","apple"]

// 1) push() ===> add the element at last nd return new length of arr

let p = fruits.push("banana")
console.log(p)
console.log(fruits)

// 2) unshift() ===> add the element at first nd return new length of arr

let q = fruits.unshift("lichi")
console.log(q)
console.log(fruits)

// 3) pop() ===> remove the element at last nd return the same element 

let g = fruits.pop()
console.log(g)
console.log(fruits)

// 4) shift() ===> remove the elements at first nd return the same element 

let r = fruits.shift()
console.log(r)
console.log(fruits)

// 5) includes() ===> search the correct element if find then return true else false 
// return boolen value (true/false)

let o = fruits.includes("Mango")
console.log(o)
let y = fruits.includes("apple")
console.log(y)
console.log(fruits)

// 6) 