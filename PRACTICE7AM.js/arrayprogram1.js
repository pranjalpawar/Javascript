// for loop method 
// birthyear
let age = [ 22,24,26,28]
let birthYear = []
for (let i = 0; i< age.length; i ++){
    //console.log(age[i])
    //console.log(2022-age[i])
    let p = 2022-age[i]
    birthYear.push(p)
}
console.log(birthYear)

// age
let birthYear1 = [1998,1996,1994]
let age1 = []
for (let i =0; i < birthYear1.length ; i ++){
    //console.log(birthYear1[i])
    //console.log(2022-birthYear1[i])
    let r = 2022-birthYear1[i]
    age1.push(r)
}
console.log(age1)


// array map method 

let p = age.map(function(el,index,arr){
    return 2022-el
})
console.log(p)

let s = birthYear1.map(function(el,index,arr){
    return 2022-el
})
console.log(s)