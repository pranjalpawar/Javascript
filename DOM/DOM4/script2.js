

let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')
let addbutton = document.querySelector('#one')
let liElement = document.querySelectorAll('li')

for (let i = 0; i< liElement.length; i++){
    createbutton(liElement[i])
}

addbutton.addEventListener('click',function(){
    let text = inputText.value
    let newElement = document.createElement('li')
    newElement.textContent = text 
    createbutton(newElement)
    ulList.appendChild(newElement)
    
})
ulList.addEventListener('click',function(e){
   
    if(e.target.tagName==="BUTTON"){
        if(e.target.className ==="remove"){
            
            let li=e.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }
    
   
        if(e.target.className ==="up"){
            let li=e.target.parentElement
            let ul=li.parentElement
          let prevli= li.previousElementSibling          
          if(prevli!=null){
          ul.insertBefore(li,prevli)
          }
        }
    
   
        if(e.target.className==="down"){
            let li=e.target.parentElement
            let ul=li.parentElement
          let prevli= li.nextElementSibling
          ul.insertBefore(prevli,li)
        }
    
    }
})
function createbutton(li){
    let create = document.createElement('button')
    create.textContent = "Remove"
    create.className = "remove"
    li.appendChild(create)

    let create2 = document.createElement('button')
    create2.textContent = "Down"
    create2.className = "down"
    li.appendChild(create2)

    let create3 = document.createElement('button')
    create3.textContent = "Up"
    create3.className = "up"
    li.appendChild(create3)

}
