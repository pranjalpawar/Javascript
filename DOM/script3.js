

document.querySelector('h1').addEventListener('click', function (){
document.querySelector('h1').style.color = "darkred"
})


//<p id="ppranjali" class="css" name="pranju">About myself</p>

// tagname
console.log(document.querySelector('p'))

// class                   
console.log(document.querySelector('.css'))

// id                              
console.log(document.querySelector('#ppranjali'))

// common factor
// tagname[attribute = value] =====> css selector 
console.log(document.querySelector('p[name="pranju"]'))

//<h1 id="mail" class="js" name="priya"> pranjali </h1>

console.log(document.querySelector('#mail'))
console.log(document.querySelector('.js'))
console.log(document.querySelector('h1'))
console.log(document.querySelector('h1[name="priya"]'))
