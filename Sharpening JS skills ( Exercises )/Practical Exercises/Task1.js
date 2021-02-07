// Task 1
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days

let day = "Sunday";

switch (day) {
    case "Sunday":
        document.body.innerHTML += `Today is Sunday i am free`;
        break;
    case "Monday":
        document.body.innerHTML += `Today is Monday I am in SEDC`;
        break;
    case "Tuesday":
        document.body.innerHTML += `Today is Tuesday I am free`;
        break;
    case "Wednesday":
        document.body.innerHTML += `Today is Wednesday I am is SEDC`;
        break;
    case "Thursday":
        document.body.innerHTML += `Today is Thursday I am free`;
        break;
    case "Friday":
        document.body.innerHTML += `Today is Friday I am free`;
        break;
    case "Saturday":
        document.body.innerHTML += `Today is Saturday I am in SEDC`;
        break;

    default:
        break;
}

