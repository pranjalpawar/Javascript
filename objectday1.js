
let names = {
    firstName: "pranjali",
    LastName: "pawar",
    Education: "MCS",
    RollNo: 25
}
console.log(names)

// Add 
// dot notation
names.firstName = "Aarti"
names.Education = "BCS"
names.RollNo = 23 
console.log(names)

// bracket notation
names['rollno'] = 20
names['age'] = 26
console.log(names)

// Update
// dot notation
names.firstName = "prasad pawar"
names.lang = "Marathi"
names.age = 22
console.log(names)

// bracket notation
names['age'] = 27
names['skills'] = 'js'
names['email id'] = "ppranjali94@gmail.com"
console.log(names)

//retrive
// dot notation

console.log(names.firstName)
console.log(names.skills)

// bracket notation

console.log(names['email id'])
console.log(names['RollNo'])

// delete
let info = {
    fname : "pranjali",
    lname : "pawar"

}
console.log(info)
// dot notation

delete info.fname
console.log(info)

// bracket notation

delete info['lname']
console.log(info)
