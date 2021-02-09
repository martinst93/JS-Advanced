let nameOfMovie = document.getElementById('name-of-movie');
let btn = document.getElementById('btn');
let movies = ["Godfather Part 1","Godfather Part 2","Home Alone 1","Home Alone 2","Home Alone 3","Star Wars Episode 1","Star Wars Episode 2","Star Wars Episode 3"];

let movie = movies.forEach(element => {
    element.trim().toLowerCase();

});


btn.addEventListener('click',function(){
    if(nameOfMovie.value === ""){
        document.body.innerHTML +=`<h1 style="color: orange;">The field can't be empty</h1>`;
    }
    else if(nameOfMovie.value.match(movie)){
        document.body.innerHTML +=`<h1 style="color: green;">${nameOfMovie.value} can be rented</h1>`;
    }
    else if (nameOfMovie.value != movie){
        document.body.innerHTML +=`<h1 style="color: red;">${nameOfMovie.value} can't be rented</h1>`;
    }
});



