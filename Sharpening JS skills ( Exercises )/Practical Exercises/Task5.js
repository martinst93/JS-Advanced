let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let btn = document.getElementById('btn');
let show = document.getElementById('show');

btn.addEventListener('click',function(){

    let result = Math.max(value1.value,value2.value,value3.value);
    show.innerText +=`${result} is the largest number`;

});