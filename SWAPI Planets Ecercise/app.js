let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let div = document.getElementById('div');
let page = 1;

function call(page){
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then(promise => promise.json())
    .then(planet => printTable(planet.results ,show))
};

function printTable(planets , show){
    show.innerHTML = "";
    for(planet of planets){
        show.innerHTML += `<table>
        <div>
        <tr>
            <th>Planet Name</th>
            <th>Population</th>
            <th>Climate</th>
            <th>Gravity</th>
        </tr>
        <tr>
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
        </tr>
        </div>
        </table>`;
    }
};
btn1.addEventListener('click', function(){
    call(page)
});
btn2.addEventListener('click',function(){
    page++;
    call(page);
});
btn3.addEventListener('click',function(){
    page--;
    call(page);
});