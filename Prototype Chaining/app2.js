function Student(student,firstName){
    this.student = student;
    this.firstName = firstName;
    this.academyName = [];
    
    this.whichAcademy = (student) => {
        switch(student){
            case "design":
                this.academyName.push("Design Academy");
                console.log(`The student ${this.firstName} is in ${this.academyName}`);
            break;
            case "code":
                this.academyName.push("Coding Academy");
                console.log(`The student ${this.firstName} is in ${this.academyName}`);
            break;
            case "network":
                this.academyName.push("Network Academy");
                console.log(`The student ${this.firstName} is in ${this.academyName}`);
            break;
        }
    }
}

function DesignStudent(isStudentOfTheMonth){
    this.isStudentOfTheMonth = isStudentOfTheMonth;

    this.attendAdobeExam = () => { console.log(`The student ${this.firstName} is doing an adobe exam`);}
}

function CodeStudent(hasIndividualProject, hasGroupProject){
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.type = [];
    this.doProjectType = (type) => { 
        switch(type){
            case "Individual":
                this.type.push("Individual");
                this.hasIndividualProject = true;
                this.hasGroupProject = false;
                console.log(`The person is working on ${this.hasIndividualProject}`)
            break;
            case "Group":
                this.type.push("Group");
                this.hasGroupProject = true;
                this.hasIndividualProject = false;
                console.log(`The person is working on ${this.hasGroupProject}`)
            break;
            case "Both":
                this.type.push("Both");
                this.hasGroupProject = true;
                this.hasIndividualProject = true;
                console.log(`The person is working on both projects`)
        }
     }
};

function NetworkStudent(academyPart){
    this.academyPart = academyPart;

    this.attendCiscoExam = () => {
        console.log(`The student ${this.firstName} is is doing a cisco exam!`);
    }
};

DesignStudent.prototype = Object.create(new Student( "design", "Mary"));
let mary = new DesignStudent("design", "Mary");
mary.firstName = "Mary";
mary.isStudentOfTheMonth = true;
console.log(mary);  
mary.whichAcademy("design")
mary.attendAdobeExam();

CodeStudent.prototype = Object.create(new Student( "code", "Steve"));
let steve = new CodeStudent();
steve.firstName = "Steve";
console.log(steve);  
steve.whichAcademy("code")
steve.doProjectType("Individual");

NetworkStudent.prototype = Object.create(new Student( "network", "Emily"));
let emily = new NetworkStudent(2);
emily.firstName = "Emily";
console.log(emily);  
emily.whichAcademy("network")
emily.attendCiscoExam();