let unorderedList = document.getElementById('u-l');
let btn = document.getElementById('btn');
let array = ["Martin","Darko","Hristijan","Marija","Anita"];

btn.addEventListener('click',function(){
    
    for(let i = 0 ; i < array.length ; i++){
        unorderedList.innerHTML += `<li>${array[i]}</li>`;
    }
    
});


