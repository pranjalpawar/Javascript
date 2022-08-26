
// polymorphism
// 1) overloading ===> same class , same method , diffrent singnature 

// 2) overriding ===> diffrent class , same method , same singnature

// overloading 
// in javascript this code is not work 
class Calculator {
    addition(x, y) {
        console.log(x + y)
    }
    addition(x, y, z) {
        console.log(x + y + z)
    }
    addition(x, y, z, a) {
        console.log(x + y + z + a)
    }
}

let add = new Calculator()
add.addition(1, 2)
add.addition(5, 1, 2)
add.addition(1, 2, 3, 4)

// overloading 

function additionA(x, y, z, a) {
     //console.log(x)
     //console.log(y)
     //console.log(z)
     //console.log(a)
    if (x != undefined && y !== undefined && z !== undefined && a !== undefined) {
        console.log(x + y + z + a)
    }
    else if (x != undefined && y !== undefined && z !== undefined) {
        console.log(x + y + z)
    }
    else if (x != undefined && y !== undefined) {
        console.log(x + y)
    }
}
additionA(5, 5)        //10
additionA(5, 5, 2)      // 12 
additionA(5, 5, 2, 3)    // 15

class calC {
    additionB(p, q, r, s) {
        // console.log(p)
        // console.log(q)
        // console.log(r)
        // console.log(s)

        if (p != undefined && q !== undefined && r !== undefined && s !== undefined) {
            console.log(p + q + r + s)
        }
        else if (p != undefined && q !== undefined && r !== undefined) {
            console.log(p + q + r)
        }
        else if (p != undefined && q !== undefined) {
            console.log(p + q)
        }
    }
}

let pranju = new calC()
pranju.additionB(2,2)             // 4
pranju.additionB(10,10,5)         // 25
pranju.additionB(10,20,30,40)     // 100

// overriding 
// diffrent class , same mathod , same singnature

class WorldBank{
    deposite(greet){
        console.log(`welcome to `+ greet)
    }
}
class SBI extends WorldBank{
    deposite(greet){
        console.log(`welcome to `+ greet + " SBI")
    }
}

let pranjali = new SBI()
pranjali.deposite('worldBank pune ')