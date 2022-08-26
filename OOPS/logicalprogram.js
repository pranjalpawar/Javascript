// class 

class Person{
    constructor(fn,ln,cty,mrk){
        this.firstName = fn
        this.lastName = ln 
        this.city = cty 
        this.marks = mrk
    }
    calPercentage(){
        return (this.marks.reduce(function(acc,el){
            return acc + el
            },0)/500)*100
    }
    static greeting(){

    }
}

let marks = [[10,20,30,40,50],[70,20,30,10,40],[11,22,33,44,55],[20,50,70,55,21],[10,25,35,45,22]]

// create 5 object for using array of object 

let students = []
for (let i = 0; i<5; i++){
   // console.log(i+1)
    let obj = new Person(`pranju${i+1}`,`pawar${i+1}`,`pune${i+1}`,marks[i])
    students.push(obj)
}
console.log(students)   // creating 5 object 

// calculate the marks percentage using array 
let percentArray = []
for (let i=0; i< students.length; i++){
    percentArray.push(students[i].calPercentage())
}
console.log(percentArray)

// average finding using of reduce method

console.log(percentArray.reduce(function(acc,el){
    return acc + el 

},0)/ students.length)      // geting average of total percentage

console.log('------------------')
// print name of every student
// using forEach method()

students.forEach(function(el,index,arr){
    console.log(el.firstName)
})

// last name of every student 
// for using forEach method()
console.log('------------------')

students.forEach(function(el,index,arr){
    console.log(el.lastName)
})

console.log('------------------')
//name with percentage of every student

students.forEach(function(el,indext,arr){
    console.log(el.firstName +" "+ el.calPercentage())
})

console.log('------------------')

// heighest mark of student 
console.log(percentArray)
let h = percentArray
let min = h[0]
let max = h[0]

for (let i =0; i< h.length; i++){
    if (h[i]< min){
        min = h[i]
    }
    else if (h[i]> max){
        max = h[i]
    }
}
console.log(min)
console.log(max)

console.log('------------------')

// name of min percentage student

console.log(students.find(function(el){
        return el.calPercentage()== min
    }).firstName)

    console.log('------------------')

// name of min percentage student

console.log(students.find(function(el){
    return el.calPercentage()== max
}).firstName)

// check the percentage > 15 
console.log(students.every(function(el){
    return el.calPercentage() > 15               // true bcoz the the percentage > 15 
}))                                        

// add the lang in every object 

students.forEach(function(el){
    el.lang = ["Hindi","Marathi","English"]
})
console.log(students)

/// Vehicle 

class Fruits{
    constructor(name,color){
        this.name = name
        this.color = color 
        
    }
}

let addfruits = [
    new Fruits("apple","red"),
    new Fruits("banana","yellow"),
    new Fruits("kewi","bottle green"),
    new Fruits("greps","light green"),
    new Fruits("orange","orange")
]

console.log(addfruits)