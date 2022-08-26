 let students = [
    { 
        fullname: "pranjali pawar",
        city: "latur",
        skills: ["html","mysql","c++","javascript"]
},

{
    fullname: "priya patil",
    city: "pune",
    skills: ["html","mysql","c++"]
},

{
    fullname: "prasad kumar",
    city: "latur",
    skills: ["html","mysql","c++","javascript"]

},

{
    fullname: "jeet thorat",
    city: "mumbai",
    skills: ["html","c++","javascript"]
},
]
// problem 1 change the city to delhi for prasad

students[2].city = "delhi"
students[2]['city'] = "delhi"
console.log(students[2])

// display number of skills for all users

for (let i=0; i< students.length; i++){
    console.log(students[i].fullname+"="+students[i].skills.length)
}

// forEach

students.forEach(function(el){
    console.log(el.fullname+":"+el.skills.length)

})

// name of person belong to city of latur 

students.forEach(function(el){
    if (el.city == "latur"){
        console.log(el.fullname)
    }

})

let citylaturArray = students.filter(function(el){
    return el.city === "latur"
})

citylaturArray .forEach(function(el){
    console.log(el.fullname)
})

// persong belongs to latur and knowns html

let rr = students.filter(function(el){
    return el.city === "latur" && el.skills.includes('html')
})

rr.forEach(function(el){
    console.log(el.fullname)
})