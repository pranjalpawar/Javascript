
//let tagName = document.querySelector('h1')
//let orderList = document.querySelector('ol')

document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color = 'darkred'
})
document.querySelector('h1').addEventListener('mouseover',function(){
    document.querySelector('h1').style.backgroundColor = "black"
})
document.querySelector('h1').addEventListener('mouseout',function(){
    document.querySelector('h1').style.backgroundColor = ''
})

document.querySelector('ol').addEventListener('mouseover',function(){
    document.querySelector('ol').style.backgroundColor = "yellow"

})
document.querySelector('ol').addEventListener('mouseout',function(){
    document.querySelector('ol').style.backgroundColor = ''
})



