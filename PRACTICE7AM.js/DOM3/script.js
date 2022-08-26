let lilist = document.querySelectorAll('li')
let ulList = document.querySelector('ul')

ulList.addEventListener('mouseover',function(){
    for(let i = 0 ; i < lilist.length ; i++){
        lilist[i].textContent =  lilist[i].textContent.toUpperCase()
    }
    
})

ulList.addEventListener('mouseout',function(){
    for(let i = 0 ; i < lilist.length ; i++){
        lilist[i].textContent =  lilist[i].textContent.toLowerCase()
    }
})