
document.querySelector('#one')
document.querySelector('.two')
document.querySelector('h1[name="nm"]')
document.querySelector('h1')
document.querySelectorAll('li')  //node 

 let body = document.querySelector('body')
console.log(body)

body.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.tagName)
    console.log(e.target.className)
})


