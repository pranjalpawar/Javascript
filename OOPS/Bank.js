// inheritance 
// polymorphism
// abstraction 
// encapsulation 


class Bank {
    constructor(accName, accNo, city, bal) {
        this.accName = accName
        this.accNo = accNo
        this.city = city
        this.balance = bal
        this.transaction = []
    }
    deposite(amount) {
        this.bal = this.bal + amount
        this.transaction.push(amount)
        return this.bal
    }
    withdrawl(amount) {
        if (this.bal > amount) {
            this.bal = this.bal - amount
            this.transaction.push(-amount)
            return this.bal
        }
        else {
            console.log('insufficent bal')
        }
    }
    lastFiveTransaction() {
        console.log(this.transaction.slice(-5))
    }
}

let pranjali = new Bank("pranjali pawar", 60086, "latur", 100000000)
console.log(pranjali)
pranjali.withdrawl(50)
pranjali.deposite(100)
pranjali.withdrawl(25)
pranjali.deposite(200)
pranjali.withdrawl(35)
pranjali.deposite(25)
pranjali.withdrawl(50)
pranjali.deposite(22)
pranjali.withdrawl(30)
pranjali.deposite(50)
pranjali.withdrawl(20)
pranjali.lastFiveTransaction()
console.log(pranjali)

// program 2 

// Es6 class 
// overriding

let WorldBank = class {
    constructor(accName, accNo, city) {
        this.accName = accName
        this.accNo = accNo
        this.city = city
    }

    deposite() {
        console.log(`deposite world bank`)
    }
    withdrawl() {
        console.log(`withdrawl world bank `)
    }
}

class SBI extends WorldBank {
    constructor(accName, accNo, city, IFSC) {
        super(accName, accNo, city)
        this.IFSC = IFSC
    }
    deposite(){
        console.log(`deposite SBI`)
        super.deposite()
    }
    withdrawl(){
        console.log(`withdrawl SBI`)
        super.withdrawl()
    }

}

class PNB extends WorldBank{
    constructor(accName,accNo,city,IFSC){
        super(accName,accNo,city)
        this.IFSC = IFSC
    }
    deposite(){
        console.log(`deposite PNB`)
        super.deposite()
    }
    withdrawl(){
        console.log(`withdrawl PNB`)
        super.withdrawl()
    }
}

let pranjalisbi = new SBI("pranju",60086,"latur",001) 
console.log(pranjalisbi)
pranjalisbi.withdrawl()

let pranjalipnb = new PNB("vidya",2222,"pune",2233)
console.log(pranjalipnb)
pranjalipnb.deposite()

console.log(pranjalipnb.accNo)
console.log(pranjalipnb.accName)
console.log(pranjalipnb.IFSC)
console.log(pranjalipnb.city)
console.log('--------------------------------')
console.log(pranjalisbi.accNo)
console.log(pranjalisbi.accName)
console.log(pranjalisbi.IFSC)
console.log(pranjalisbi.city)