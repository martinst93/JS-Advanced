let number = document.getElementById('number');
let btn = document.getElementById('btn');
let par = document.getElementById('par');
let feet = 3.281;

function convert(){
    result = number.value % feet;
    par.innerText += `${result} m`;
}

btn.addEventListener('click',convert);