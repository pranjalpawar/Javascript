// structure and destructure

//        0  1  2  3  4
let p11 = [ 11,22,33,44,55]
console.log(p11[0])
console.log(p11[2])
console.log(/------------------------/)
let aaa = p11[0]
let bbb = p11[1]
let c = p11[2]
let d = p11[3]
let e = p11[4]

console.log(aaa)
console.log(bbb)
console.log(c)
console.log(d)
console.log(e)
console.log(/------------------------/)

arr = [11,22,33,44]
let [aa,bb,cc,dd] = arr
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)
console.log(/------------------------/)

let person = ["pranjali","priya","yuvika","arohi"]
let [p , q , r , s ] = person

console.log(p)
console.log(q)
console.log(r)
console.log(s)
console.log(/------------------------/)

let data = ["karan","kiran","khushi","mahi"]
let [k , l , m , n ] = data

console.log(k)
console.log(n)
console.log(/------------------------/)

// object 

let obj = {
    fname: "durga",
    lname: "patil",
    age: 25,
    city: "pune"
}

let {fname, lname, age, city} = obj 
console.log(city)
console.log(lname)
console.log(/------------------------/)

let names = {
    firstname: "pranjali",
    lastname: "patil",
    city2: ["latur","pune"]
}

let {firstname:fun , lastname:lan , city2:[ a , b ]} = names
console.log(fun)
console.log(a)
console.log(b)
console.log(/------------------------/)

let city5 = [["pune","latur"],["bhopal","delhi"]]

let [[a1, b1],[p1 , p2]] = city5 
console.log(a1)
console.log(b1)
console.log(p1)
console.log(p2)
console.log(/------------------------/)

let country = {

    userone:{
        fullname: "pranjali",
        lastname: "pawar"
    },
    usertwo:{
        fullname: "p4",
        lastname: "p5"
    }
}

let {userone:{fullname:fn,lastname:ln},usertwo:{fullname:fn1,lastname:ln2}} = country
console.log(fn)
console.log(ln)
console.log(fn1)
console.log(ln2)
console.log(/------------------------/)

let newdata = [
    {
    city: "latur",
    skill: "java",
    age: 26
},

{
    city: "pune",
    skill: "css",
    age: 24

}
]

let [{city:c1,skill:s1,age:ag1},{city:c2,skill:s2,age:ag2}] = newdata
console.log(c1)
console.log(s1)
console.log(ag1)
console.log(/------------------------/)
console.log(c2)
console.log(s2)
console.log(ag2)

console.log(/------------------------/)

// spread operator and rest operator
// rest operator

function add (...arr){
    console.log(arr)
    let data2 = arr.reduce(function(acc,el,index,arr){
        return acc + el
    },0)
    return data2
}

let data3 = add (1,2,3,4,5,0,6,8,9,7,6)
console.log(data3)
console.log(/------------------------/)


function add (...array){
    console.log(array)
let y = array.map(function(el,index,arr){
    return el * 2
})
return y 

}

let u = add (11,22,33,44,55)
console.log(u)

console.log(/------------------------/)

function addition (...num){
    console.log(num)
  let l = num.filter(function(el,index,arr){
      return el > 10
  })
  return l
}
let r1= addition (1,2,3,4,5,11,22,33,66,44)
console.log(r)