// for loop = avoid the code of repeatation

for (let i = 0 ; i < 5; i++){

    console.log(i)
}

 
for (let i =0; i<5; i++){
    if (i == 1){
        continue
    }
    console.log(i)
}


for (let i = 0; i <= 10; i ++){
    if(i == 5){
        continue
    }
    console.log(i)

}
 
for (let i =0; i<20; i ++){
    if(i == 5){
        continue
    }
    console.log(i)
}


for (let i =0; i<20; i ++){
    if(i == 5){
        break
    }
    console.log(i)
}

let k =1
for (; k<5 ;){

    console.log(k)
    k++
}

let j = 1
for(; j<=10;){
    console.log(j)
    j++
}

let h = 2 
for (; h<5 ;){
    console.log(h)
    h++
}

let g = 10
for (; g>=0;){
    console.log(g)
    g--
}

let p = 10
for (; p>=0 ;){
    console.log(p)
    p--
}

let f = 5
for (; f>=1;){
    console.log(f)
    f--
}