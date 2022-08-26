
// function constructor solution program

let Person = function(fn,ln,ag,cty,rn,sks){
    this.fullName = fn 
    this.lastName = ln 
    this.age = ag
    this.city = cty
    this.rollno = rn 
    this .skills = sks
    this.display = function(){
        console.log(`welcome `+ this.fullName)
    }
}

let pranjali= new Person("pranjali","pawar",26,"pune",44,["java","html","dom"])
console.log(pranjali)
pranjali.display()

// solution

let Person2 = function(fn,ln,ag,cty,skills){
    this.firstName = fn 
    this.lastName = ln 
    this.age = ag 
    this.city = cty
    this.skills = skills
} 

Person2.prototype.display= function(){
    console.log(`welcome `+ this.firstName)
}
 

 let pranju = new Person2 ("pranju","pawar",26,"latur",["html","java"])
console.log(pranju)
 pranju.display()

 /*** *

 let Person = function (fn,ln,ag,rn){
     this.firstName = fn 
     this.lastName = ln 
     this.age = ag 
     this.rollno = rn 
 }
 Person.prototype.displyaName= function(){
     console.log(this.firstName)
 }

 let pranju = new Person ("pranju","pawar",26,45)
 console.log(pranju)
 pranju.displyaName()
 /** */