function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName; 
    this.age = age;

    this.getFullName = () => {
        console.log(`The person's first name is ${this.firstName} and ${this.lastName} is his last name`);
    }
};

function Student(academyName, studentId){
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = () => {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}`);
    }
};

Student.prototype = Object.create(new Person("Ted","Smith",23));
let ted = new Student("Seavus", "123456");
ted.firstName = "Ted";
ted.lastName = "Smith";
ted.age = 23;
ted.getFullName();
ted.study();
console.log(ted);

Student.prototype = Object.create(new Person("Bill","Smith",33));
let bill = new Student("Seavus", "654321");
bill.firstName = "Bill";
bill.lastName = "Simpson";
bill.age = 33;
bill.getFullName();
bill.study();
console.log(bill);