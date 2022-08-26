let person = {
    fname: "pranjali pawar",
    rno: 25,
    age: 26,
    skills: ["js","c++","sql","html"],
    city: "latur"
}

// retrive
console.log(person.skills)
console.log(person['city'])

// add
person.emailid = "ppranjali@gmail.com"
person['emailid'] = "ppranjali@gmail.com"
console.log(person)

// update
person.rno = 45
person['rno'] = 45
console.log(person)

// delete
delete person.age
delete person['rno']
console.log(person)

/*-----------------------*/

person = {
    fullname: "pranjali pawar",
    age: 26,
    skills: ["java","html","c++","mysql"],
    city: "latur"

}
for (let key in person){
    console.log( key,person[key])
}
