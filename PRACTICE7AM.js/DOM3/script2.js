let ulList = document.querySelector('ul')
let buttonC = document.querySelector('button')
let inputText = document.querySelector('input')


// read the value from inputext text
// create element .. <li></li>
// add text to it  .. <li>Papaya<li>
// append new element to UlList
// on button click

buttonC.addEventListener('click',function(){
    let text = inputText.value
    let newE = document.createElement('li') // <li></li>
    newE.textContent = text  // <li>Papaya<li>
    ulList.appendChild(newE)
    inputText.value = ""
})