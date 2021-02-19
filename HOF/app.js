const btn = document.getElementById('btn');
let show = document.getElementById('show');

function call(){
    fetch(`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
    .then(promise => promise.json())
    .then(student => printTable(student,show))
};

function printTable(students,show){
    show.innerHTML = "";

    let students1 = students.filter(student => student.averageGrade > 3);
    let students2 = students.filter(student => student.gender =="Female" && student.averageGrade == 5);
    let students3 = students.filter(student => student.gender =="Male" && student.city == "Skopje" && student.age > 18);
    let students4 = students.filter(student => student.gender =="Female" && student.age > 24);
    let students5 = students.filter(student => student.gender =="Male" && student.averageGrade > 2 && student.firstName[0] == "B");
    
        show.innerHTML +=`
    <table>
            <table class="headingT">
                <tr>
                    <th class="thead">Students with an average grade higher than 3</th>
                </tr>
            </table>
        <table class="headingT">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Grade Average</th>
            </tr>
        </table>
    </table>`;
   
    students1.forEach((student) => {
        show.innerHTML +=`
    <table class="headTT">
        <tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.averageGrade}</td>
        </tr>
    </table>`;
    });
        show.innerHTML +=`
    <table>
        <table class="headingT">
            <tr>
                <th class="thead">Female student names with an average grade of 5</th>
            </tr>
        </table>
        <table class="headingT">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Grade Average</th>
            </tr>
        </table>
    </table>`;

    students2.forEach((student) => {
        show.innerHTML +=`
    <table class="headTT">
        <tr class="prop">
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.averageGrade}</td>
        </tr>
    </table>`;
    });
        show.innerHTML +=`
    <table>
        <table class="headingT">
            <tr>
                <th class="thead">Male student full names who live in Skopje and are over 18 years old</th>
            </tr>
        </table>
        <table class="headingT">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Age</th>
            </tr>
        </table>
    </table>`;
    students3.forEach((student) => {
        show.innerHTML +=`
    <table class="headTT">
        <tr class="prop">
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.city}</td>
            <td>${student.age}</td>
        </tr>
    </table>`;
    });
        show.innerHTML +=`
    <table>
        <table class="headingT">
            <tr>
                <th class="thead">The average grades of all female students over the age of 24</th>
            </tr>
        </table>
        <table class="headingT">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Grade Average</th>
                <th>Age</th>
            </tr>
        </table>
    </table>`;
    students4.forEach((student) => {
        show.innerHTML +=`
    <table class="headTT">
        <tr class="prop">
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.averageGrade}</td>
            <td>${student.age}</td>
        </tr>
    </table>`;
    });
        show.innerHTML +=`
    <table>
    <table class="headingT">
        <tr>
            <th class="thead">All male students with a name starting with B and average grade over 2</th>
        </tr>
        </table>
        <table class="headingT">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Grade Average</th>
        </tr>
        </table>
    </table>`;
    students5.forEach((student) => {
        show.innerHTML +=`
    <table class="headTT">
        <tr class="prop">
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.averageGrade}</td>
        </tr>
    </table>`;
    });

};

btn.addEventListener('click',call);

