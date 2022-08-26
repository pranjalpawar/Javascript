// for loop method 

let num = [ 20,21,33,45,88,75,36,44,40]
let above40 = []

for (let i = 0; i < num.length; i ++){
   // console.log(num[i])
    if (num[i] > 40){
        above40.push(num[i])
    }
}
console.log(above40)


let vari = [20,21,22,30,31,32,44,45,46]
let above30 = []
for (let i =0; i< vari.length; i ++){
    //console.log(vari[i])
     if (vari[i] > 30){
         above30.push(vari[i])
     }

}
console.log(above30)

// array filter method 

let jk = num.filter(function(el,index,arr){
    return el > 40
})
console.log(jk)



let kk = vari.filter(function(el,index,arr){
    return el > 30
})
console.log(kk)