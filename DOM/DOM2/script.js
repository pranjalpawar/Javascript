// program 1

let liList = document.querySelectorAll('li')
let addButton = document.querySelector('button')
let ulList = document.querySelector('ul')
console.log(liList) // [li,li,li]
console.log(addButton)

// <h2 class="same" id="unique" name="pooja"> Names </h2>


//for (let i = 0; i < liList.length; i++){
    //console.log(i)
  //  console.log(liList[i].textContent)
    //liList[i].textContent = "Yuvika"
//}

addButton.addEventListener('click', function(){
    for (let i = 0; i < liList.length; i++){
        //console.log(i)
        console.log(liList[i].textContent)
        liList[i].textContent = "Yuvika"
    }
})

// program two 

addButton.addEventListener('click',function(){
    for (let i = 0; i < liList.length; i++){
        liList[i].style.color = " red "
        liList[i].style.backgroundColor = " black "
    }
})
 
// program three

ulList.addEventListener('mouseover',function(){
    for (let i = 0; i < liList.length; i++){
        liList[i].style.color = " red "
        liList[i].style.backgroundColor = " black "
    }
})


ulList.addEventListener('mouseout',function(){
    for (let i = 0; i < liList.length; i++){
        liList[i].style.color = " blue "
        liList[i].style.backgroundColor = " black "
    }
})
