//  Topic Es6 
// How to destructure Array,Object..

let arr = ["pranjali","priyanka","pooja","prasad"]
let [x,y,a,b] = arr
console.log(x)
console.log(y)
console.log(a)
console.log(b)

// program 1 

let city = [["nagpur","pune"],"latur","mumbai"]

let [[p,q],r,s] = city
console.log(p)
console.log(q)
console.log(r)
console.log(s)

//swipe using temp

let u = 12
let k = 50
temp = u 
u = k
k = temp
console.log(u)   // 50
console.log(k)   // 12

let mango = 10;
let apple = 15;
[mango,apple]=[apple,mango];
console.log(mango)   // 15
console.log(apple)   // 10

// object destructure 

let person = {
    firstName: "pranjali",
    lastName: "pawar"
}

let {firstName:fn,lastName:ln} = person
console.log(fn)
console.log(ln)

// combination array of object 

let students = [
    {
        fullName: "pranju pawar",
        city: "latur"
    },
    {
        fullName: "priya pawar",
        city: "pune"
    }
]

let [{fullName:fn1,city:cty1},{fullName:fn2,city:cty2}] = students
console.log(cty2)
console.log(fn1)
console.log(fn2)
console.log(cty1)

// combination object of array 

let obj = {
    skills: [1,2,3,4],
    intrest: ["js","html"]
}

let {skills:[o,l,m,n],intrest:[v,w]} = obj
console.log(l)
console.log(o)
console.log(w)
console.log(v)


let info2 ={
    parents2:{
        father: "eknath",
        mother: "mukta"
    }
}

let {parents2:{father,mother}} = info2
console.log(father)
console.log(mother)



