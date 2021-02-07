// Task 2
//Declare and assign an array of 6 integers. Ex 5,6,15,42.
//Declare and assign an array of strings. Ex Viktor Kristina Trajan
//Print the first value of each array.
//Print the arrays.
//Change the values of the first element in both arrays.
//Assign a value to the 100 th member of the first array.
//Print how many elements the array has? 
//What is the value of the 99th element in the array.
//Write an example of push.
//Write an example of pop.
//What is the value of the 1000th element in both arrays?
// 9.Write an if statement that prints "It's a cool number" if
// a number is even or larger than 100

let arrayOfSixNumbers = [5,15,67,90,57,421];
let arrayOfStrings = ["Petar","Marija","Viktor","Ana"];

let firstOfNumbers = arrayOfSixNumbers[0];
console.log(firstOfNumbers);

let firstOfArrayOfStrings = arrayOfStrings[0];
console.log(firstOfArrayOfStrings);

for ( i=0 ; i<arrayOfSixNumbers.length ; i++){
    console.log(arrayOfSixNumbers[i]);
}

for ( i=0 ; i<arrayOfStrings.length ; i++){
    console.log(arrayOfStrings[i]);
}

arrayOfSixNumbers[0] = 6;
arrayOfStrings[0] = "Natali";
console.log(arrayOfSixNumbers[0]);
console.log(arrayOfStrings[0]);

