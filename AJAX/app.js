let btn = document.getElementById('btn');



function call(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json();
    })
    .then(function(response){
            console.log(response);
            for(let info of response){     
                     
                document.body.innerHTML += `<table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address & City</th>
                    <th>Company & Website</th>
                </tr>
                <tr>
                    <td>${info.name}</td>
                    <td>${info.username}</td>
                    <td>${info.email}</td>
                    <td>${info.address["street"]} - ${info.address["city"]}</td>
                    <td>${info.company["name"]} - <link rel="stylesheet" href="#">${info.website}</td>
                </tr>
                </table>`;
            }
        })
    }



btn.addEventListener('click',call);


