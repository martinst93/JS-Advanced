let input = document.getElementById('input');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
let show = document. getElementById('show');

function call(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(promise => promise.json())
    .then(user => printTable(user,show))
};

function printTable(user,show){
    let userName = user.filter((user) => user.name);
    let userEmail = user.filter((user) => user.email);
    let userPhone = user.filter((user) => user.phone);

    let insensitiveValue = input.value.toLowerCase();

    if(input.value.trim() == ""){
        show.innerHTML +=`<h3>The input field can't be empty</h3>`;
    }else if(insensitiveValue.trim() == "name"){
        show.innerHTML +=`
        <tr>
            <th id="red">Name</th>
        </tr>`;
        userName.forEach((user) => {
           let result; 
           result = user.id + user.id;
           console.log(result);
           show.innerHTML +=`
           <tr>
                <td>${user.name}</td>
           </tr>
           `;
        });
    }else if(insensitiveValue.trim() == "email"){
        show.innerHTML +=`
        <tr>
            <th id="yellow">Email</th>
        </tr>`;
        userEmail.forEach((user) => {
           let result; 
           result = user.id + user.id;
           console.log(result);
           show.innerHTML +=`
           <tr>
                <td>${user.email}</td>
           </tr>
           `;
        });
    }else if(insensitiveValue.trim() == "phone"){
        show.innerHTML +=`
        <tr>
            <th id="green">Phone</th>
        </tr>`;
        userPhone.forEach((user) => {
           let result; 
           result = user.id + user.id;
           console.log(result);
           show.innerHTML +=`
           <tr>
                <td>${user.phone}</td>
           </tr>
           `;
        });
    }else {
        show.innerHTML = `<h3>You must enter a name, phone or email to preform the search</h3>`
    }
};

function clear(){
    show.innerHTML = "";
}

btn.addEventListener('click',call);
btn2.addEventListener('click',clear);
