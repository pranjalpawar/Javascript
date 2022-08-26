
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#one')
let liList = document.querySelectorAll('li')
let headOne = document.querySelector('h1')

console.log(headOne.textContent)
console.log(headOne.classList)
console.log(headOne.className)

console.log(ulList)
console.log(inputText)
console.log(buttonA)

for ( let i = 0; i < liList.length; i++){
    createButton(liList[i])
}

buttonA.addEventListener('click', function(){
    let text = inputText.value
    let liList = document.createElement('li')
    liList.textContent = text
    createButton(liList)
    ulList.appendChild(liList)
})

// function declaration 
 
 function createButton(li){
     let create = document.createElement('button')
     create.textContent = "Remove"
     create.classList = "remove"
     li.appendChild(create)

     let create2 = document.createElement('button')
     create2.textContent = "Up"
     create2.classList = "up"
     li.appendChild(create2)

     let create3 = document.createElement('button')
     create3.textContent = "Down"
     create3.classList = "down"
     li.appendChild(create3)
 }
