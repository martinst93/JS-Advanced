// let navServices = {
//     input: document.getElementById('input'),
//     btnN: document.getElementById('btnN'),

//     registerListeners: function(){
//         this.btnN.addEventListener('click',function(){
//             apiService.toggleLoader(true);
//             apiService.call()
//         })
//     }
// };

// let apiService = {
//     loader: document.getElementById('loader'),
//     call(){
//         fetch(`https://restcountries.eu/rest/v2/all`)
//         .then(promise => promise.json())
//         .then(data => this.printTable(data))
        
//         .finally(function(){apiService.toggleLoader(false)})
//         show.innerHTML = "";
        

//     },

//     printTable: function(data,show){
        
//         let insensitiveV = input.value.toLowerCase();

//         if(insensitiveV.trim() === "Flag" || insensitiveV.trim() === "Name" || insensitiveV.trim() === "Population" || insensitiveV.trim() === "Capital" || insensitiveV.trim() === "Area"){
//             show.innerHTML += `
//             <tr>
//                 <th>Flag</th>
//                 <th>Name</th>
//                 <th><a href="#" id="sort">Population</a></th>
//                 <th>Capital</th>
//                 <th>Area</th>
//             </tr>`;
//             for(let post of data){
//                    show.innerHTML +=`
//                    <tr>
//                         <td>${post.flag}</td>
//                         <td>${post.name}</td>
//                         <td>${post.capital}</td>
//                         <td>${post.area}</td>
//                    </tr>
//                    `;
//             }
//         }
//     },  
//     toggleLoader: function(toggle){
//         if(toggle) this.loader.style.display = "block";
//         else this.loader.style.display = "none";
//     }

// }

// navServices.registerListeners();
// apiService.call();
// apiService.printTable();

const printCountries = document.getElementById('show');
let btn = document.getElementById('btnN');
let btn2 = document.getElementById('btnC');
let input = document.getElementById('input');

async function getCountries() {  
    const res = await fetch('https://restcountries.eu/rest/v2/all');
  
    const data = await res.json();
    console.log(data);

    let insesitiveV = input.value.toLocaleLowerCase();

    if(insesitiveV.trim() === " "){
        show.innerHTML +=`<h3>The input field can't be empty</h3>`;
    }

    if(insesitiveV.trim() === "name"){
        show.innerHTML += `
        <tr>
            <th id="red">Name</th>
        </tr>`
        ;
    }

    data.forEach(element => {
        let result ;
        result = element.name;
        console.log(result);

        show.innerHTML += `
        <tr>
        <th>${element.name}</th>
        </tr>
        `;

    });

    if(insesitiveV.trim() === "flag"){
        show.innerHTML += `
        <tr>
            <th id="red">Flag</th>
        </tr>`
        ;
    }

    data.forEach(element => {
        let result ;
        result = element.flag;

        show.innerHTML += `
        <tr>
        <td>${element.flag}</td>
        <th>
        `;

    });
    if(insesitiveV.trim() === "population"){
        show.innerHTML += `
        <tr>
            <th id="yellow">Population</th>
        </tr>`
        ;
    }

    data.forEach(element => {
        let result ;
        result = element.flag;
        
        show.innerHTML += `
        <tr>
        <td>${element.population}</td>
        <th>
        `;

    });
    if(insesitiveV.trim() === "capital"){
        show.innerHTML += `
        <tr>
            <th id="green">Capital</th>
        </tr>`
        ;
    }

    data.forEach(element => {
        let result;
        result = element.flag;

        show.innerHTML += `
        <tr>
        <td>${element.capital}</td>
        <th>
        `;

    });
    if(insesitiveV.trim() === "area"){
        show.innerHTML += `
        <tr>
            <th id="orange">Area</th>
        </tr>`
        ;
    }

    data.forEach(element => {
        let result;
        result = element.area;
        
        show.innerHTML += `
        <tr>
        <td>${element.area}</td>
        <th>
        `;

    });


   
}
function clear(){
    show.innerHTML = "";
}
btn2.addEventListener("click",clear);
btn.addEventListener("click",getCountries);
