// async into sync nature ....

function getUser() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)
    setTimeout(function () {
        console.log("data retrived by id ")
    }, 2000)
    setTimeout(function () {
        console.log("user deleted ")
    }, 1000)

}
//getUser()


// call back hell

function getUserInfo() {

    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('user created by id ')
            setTimeout(function () {
                console.log('user deleted')
            }, 1000)
        }, 2000)
    }, 3000)
}
getUserInfo()

// promises ===> Resolve, Reject, Pending

let pro = new Promise(function(resolve,reject){
    let Fruits = "mango"

    if(Fruits.length >=5){
        resolve(["hello","hey"])
    }
    else{
        reject(["bye","tata"])
    }
})
pro.then(function(arr){
    console.log(arr[1])

},function(arr){
   console.log(arr[0])

})