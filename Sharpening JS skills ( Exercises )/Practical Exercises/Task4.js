let personAge = document.getElementById('number');
let btn = document.getElementById('btn');
let par = document.getElementById('par');
let year = 2021;

function calculateAge(){
    result = year - personAge.value; 
    par.innerText +=`The Person is ${result} years old`;
}

btn.addEventListener('click',calculateAge);