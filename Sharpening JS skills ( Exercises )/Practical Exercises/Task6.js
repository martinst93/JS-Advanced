let input = document.getElementById('input');
let btn = document.getElementById('btn');
let display = document.getElementById('display');

btn.addEventListener('click',function(){
    let randomNum = Math.floor((Math.random() * 10) + 1);
    if(input.value == randomNum && input.value == 1){
        display.innerText +=`one`;
    }else if(input.value == randomNum && input.value == 2){
        display.innerText +=`two`;
    }
    else if(input.value == randomNum && input.value == 2){
        display.innerText +=`two`;
    }
    else if(input.value == randomNum && input.value == 3){
        display.innerText +=`three`;
    }
    else if(input.value == randomNum && input.value == 4){
        display.innerText +=`four`;
    }
    else if(input.value == randomNum && input.value == 5){
        display.innerText +=`five`;
    }
    else if(input.value == randomNum && input.value == 6){
        display.innerText +=`six`;
    }
    else if(input.value == randomNum && input.value == 7){
        display.innerText +=`seven`;
    }
    else if(input.value == randomNum && input.value == 8){
        display.innerText +=`eight`;
    }
    else if(input.value == randomNum && input.value == 9){
        display.innerText +=`nine`;
    }
    else if(input.value == randomNum && input.value == 10){
        display.innerText +=`ten`;
    }else 
        alert('invalid input');
});

