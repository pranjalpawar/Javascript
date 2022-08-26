  let students = [
      {
        fullName: "pranjali pawar ",
        city: "latur",
        age: 26,
        skills: ["java","html","cpp","mysql"],
        family:{
            father: "eknath",
            mother: "mukta",
            sister: "priya",
            brother: "prasad"
        }
      },
      {
        fullName: "priya patil ",
        city: "pune",
        age: 24,
        skills: ["javascript","c#","c+","html"],
        family:{
            father: "vasant",
            mother: "monika",
            sister: "pragati",
            brother: "pranav"
        }
      },
      {
        fullName: "prasad pawar",
        city: "latur",
        age: 22,
        skills: ["java","python","angular","dbms"],
        family:{
            father: "kumar",
            mother: "ketaki",
            sister: "ankita",
            brother: "manoj"
        }
      },
      {
        fullName: "riya hindole",
        city: "mumbai",
        age: 30,
        skills: ["html","cypress","react","php"],
        family:{
            father: "raj",
            mother: "pooja",
            sister: "swara",
            brother: "nil"
        }
      },
  ]

  // print full name and city 

  students.forEach(function(el,index,arr){
      console.log(el.fullName, el.city)

  })

  // print fullName with no of skills 

  students.forEach(function(el,index,arr){
        console.log(el.fullName, el.skills)
  })

  // print users belongs to latur city using filter method

  students.filter(function(el,index,arr){
        return el.city =="latur"
  }).forEach(function(el,index,arr){
        console.log(el.fullName)
  })

  // print users belongs to mumbai city using foreach method

  students.forEach(function(el,index,arr){
    if(el.city =="mumbai"){
        console.log(el.fullName)
    }
  })

  // average age of all users
  console.log(students.reduce(function(acc,el,index,arr){
        return acc + el.age
  },0)/ students.length)
  
  // print users city is latur or mumbai with html 